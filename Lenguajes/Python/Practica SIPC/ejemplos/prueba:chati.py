import mediapipe as mp
from mediapipe.framework.formats import landmark_pb2
import numpy as np
import cv2
import time
import pygame
import pymunk
import pymunk.pygame_util
from pymunk import Vec2d
import random
import sys

# Configuración inicial de MediaPipe
mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands

# Resolución de la ventana de Pygame
width, height = 600, 600

# Configuración del modelo de MediaPipe
detection_result = None
tips_id = [8]  # Índice para el dedo índice

collision_types = {
    "ball": 1,
    "brick": 2,
    "bottom": 3,
    "player": 4,
}

# Función de MediaPipe para extraer resultados
def get_hand_position(detection_result):
    if detection_result.multi_hand_landmarks:
        landmarks = detection_result.multi_hand_landmarks[0]
        index_tip = landmarks.landmark[tips_id[0]]  # Dedo índice
        x_norm = index_tip.x  # Coordenada X normalizada (0 a 1)
        return x_norm * width  # Convertir a escala de la ventana
    return None

# Función para configurar los ladrillos
def setup_bricks(space):
    for x in range(10):  # 5 columnas
        for y in range(6):  # 3 filas
            brick_body = pymunk.Body(body_type=pymunk.Body.KINEMATIC)
            brick_body.position = 112 + x * 40, 400 + y * 15
            brick_shape = pymunk.Poly.create_box(brick_body, (30, 10))
            brick_shape.color = pygame.Color("blue")
            brick_shape.elasticity = 1.0
            brick_shape.collision_type = collision_types["brick"]
            space.add(brick_body, brick_shape)

    # Configurar colisiones con los ladrillos
    def remove_brick(arbiter, space, data):
        brick_shape = arbiter.shapes[0]
        space.remove(brick_shape, brick_shape.body)
        return True

    h = space.add_collision_handler(collision_types["brick"], collision_types["ball"])
    h.begin = remove_brick

# Función principal del juego
def main():
    global detection_result

    ### Inicialización de PyGame
    pygame.init()
    screen = pygame.display.set_mode((width, height))
    clock = pygame.time.Clock()
    running = True
    font = pygame.font.SysFont("Arial", 16)

    ### Configuración de Pymunk
    space = pymunk.Space()
    pymunk.pygame_util.positive_y_is_up = True
    draw_options = pymunk.pygame_util.DrawOptions(screen)

    # Paredes del juego
    static_lines = [
        pymunk.Segment(space.static_body, (50, 50), (50, 560), 2),
        pymunk.Segment(space.static_body, (50, 560), (560, 560), 2),
        pymunk.Segment(space.static_body, (560, 560), (560, 50), 2),
    ]
    for line in static_lines:
        line.color = pygame.Color("lightgray")
        line.elasticity = 1.0

    space.add(*static_lines)

    # Base roja (fin del juego si se cruza)
    bottom = pymunk.Segment(space.static_body, (50, 50), (550, 50), 2)
    bottom.sensor = True
    bottom.color = pygame.Color("red")
    space.add(bottom)

    # Paddle del jugador
    player_body = pymunk.Body(500, float("inf"))
    player_body.position = 300, 100
    player_shape = pymunk.Segment(player_body, (-50, 0), (50, 0), 8)
    player_shape.color = pygame.Color("red")
    player_shape.elasticity = 1.0
    space.add(player_body, player_shape)

    # Restricción: solo moverse horizontalmente
    move_joint = pymunk.GrooveJoint(
        space.static_body, player_body, (100, 100), (500, 100), (0, 0)
    )
    space.add(move_joint)

    # Crear pelota inicial
    def spawn_ball():
        ball_body = pymunk.Body(1, float("inf"))
        ball_body.position = player_body.position + (0, 40)
        ball_shape = pymunk.Circle(ball_body, 5)
        ball_shape.color = pygame.Color("green")
        ball_shape.elasticity = 1.0
        ball_body.velocity = (random.choice([-400, 400]), 400)
        ball_shape.collision_type = collision_types["ball"]
        space.add(ball_body, ball_shape)

    spawn_ball()
    setup_bricks(space)  # Añadir ladrillos al escenario

    ### Configuración de MediaPipe
    cap = cv2.VideoCapture(0)
    hands = mp_hands.Hands(min_detection_confidence=0.5, min_tracking_confidence=0.5)

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        ### MediaPipe: Detección de manos
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.flip(frame, 1)  # Espejo
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        detection_result = hands.process(rgb_frame)
        x_hand_position = get_hand_position(detection_result)

        # Controlar paddle con la mano
        if x_hand_position is not None:
            player_body.position = x_hand_position, player_body.position.y

        ### Dibujar en Pygame
        screen.fill(pygame.Color("black"))
        space.debug_draw(draw_options)
        pygame.display.flip()

        ### Actualizar física
        dt = 1.0 / 60.0
        space.step(dt)
        clock.tick(60)

        ### Mostrar detección en OpenCV
        if detection_result.multi_hand_landmarks:
            for hand_landmarks in detection_result.multi_hand_landmarks:
                mp_drawing.draw_landmarks(
                    frame, hand_landmarks, mp_hands.HAND_CONNECTIONS
                )
        cv2.imshow("MediaPipe Hands", frame)
        if cv2.waitKey(1) & 0xFF == 27:  # Presionar ESC para salir
            break

    cap.release()
    hands.close()
    cv2.destroyAllWindows()
    pygame.quit()


if __name__ == "__main__":
    main()
