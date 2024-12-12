import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
from mediapipe import solutions
from mediapipe.framework.formats import landmark_pb2
import numpy as np
import cv2
import pygame
import pymunk
import sys
import time
from pymunk import Vec2d
import random

import PhysicsAndBodies as pb
"""
np.atan2(y, x) -> Devuelve el ángulo en radianes cuyo arco tangente es y/x.

"""
# ====== Mediapipe ======

# Configuración de la detección de manos
model_path = 'hand_landmarker.task'
BaseOptions = mp.tasks.BaseOptions
HandLandmarker = mp.tasks.vision.HandLandmarker
HandLandmarkerOptions = mp.tasks.vision.HandLandmarkerOptions
HandLandmarkerResult = mp.tasks.vision.HandLandmarkerResult
VisionRunningMode = mp.tasks.vision.RunningMode
detection_result = None

# Índices de los dedos
tips_id = [4,8,12,16,20]

# Función que obtiene el resultado de la detección
def get_result(result: HandLandmarkerResult, output_image: mp.Image, timestamp_ms: int):
  global detection_result
  detection_result = result

def draw_landmarks_on_image(rgb_image, detection_result):
  hand_landmarks_list = detection_result.hand_landmarks
  annotated_image = np.copy(rgb_image)
  # Loop through the detected hands to visualize.
  for idx in range(len(hand_landmarks_list)):
    hand_landmarks = hand_landmarks_list[idx]
    # Draw the hand landmarks.
    hand_landmarks_proto = landmark_pb2.NormalizedLandmarkList()
    hand_landmarks_proto.landmark.extend([
      landmark_pb2.NormalizedLandmark(x=landmark.x, y=landmark.y, z=landmark.z) for landmark in hand_landmarks
    ])
    solutions.drawing_utils.draw_landmarks(
      annotated_image,
      hand_landmarks_proto,
      solutions.hands.HAND_CONNECTIONS,
      solutions.drawing_styles.get_default_hand_landmarks_style(),
      solutions.drawing_styles.get_default_hand_connections_style())
  return annotated_image




def main():
    ### PyGame init
    pygame.init()
    screen = pygame.display.set_mode((600, 600))
    clock = pygame.time.Clock()
    running = True
    font = pygame.font.SysFont("Courier", 16)
    ### Physics stuff
    space = pymunk.Space()
    pymunk.pygame_util.positive_y_is_up = True
    draw_options = pymunk.pygame_util.DrawOptions(screen)

    ### Game area
    # walls - the left-top-right walls
    static_lines = [
        pymunk.Segment(space.static_body, (50, 50), (50, 550), 2),
        pymunk.Segment(space.static_body, (50, 550), (550, 550), 2),
        pymunk.Segment(space.static_body, (550, 550), (550, 50), 2),
    ]
    for line in static_lines:
        line.color = pygame.Color("lightgray")
        line.elasticity = 1.0

    space.add(*static_lines)

    # bottom - a sensor that removes anything touching it
    bottom = pymunk.Segment(space.static_body, (50, 50), (550, 50), 2)
    bottom.sensor = True
    bottom.collision_type = pb.collision_types["bottom"]
    bottom.color = pygame.Color("red")

    def remove_first(arbiter, space, data):
        ball_shape = arbiter.shapes[0]
        space.remove(ball_shape, ball_shape.body)
        return True

    h = space.add_collision_handler(pb.collision_types["ball"], pb.collision_types["bottom"])
    h.begin = remove_first
    space.add(bottom)

    ### Player ship
    player_body = pymunk.Body(500, float("inf"))
    player_body.position = 300, 100

    player_shape = pymunk.Segment(player_body, (-50, 0), (50, 0), 8)
    player_shape.color = pygame.Color("red")
    player_shape.elasticity = 1.0
    player_shape.collision_type = pb.collision_types["player"]
    
    options = HandLandmarkerOptions(
    base_options=BaseOptions(model_asset_path=model_path),
    running_mode=VisionRunningMode.LIVE_STREAM,
    result_callback=get_result)

    def pre_solve(arbiter, space, data):
        # We want to update the collision normal to make the bounce direction
        # dependent of where on the paddle the ball hits. Note that this
        # calculation isn't perfect, but just a quick example.
        set_ = arbiter.contact_point_set
        if len(set_.points) > 0:
            player_shape = arbiter.shapes[0]
            width = (player_shape.b - player_shape.a).x
            delta = (player_shape.body.position - set_.points[0].point_a).x
            normal = Vec2d(0, 1).rotated(delta / width / 2)
            set_.normal = normal
            set_.points[0].distance = 0
        arbiter.contact_point_set = set_
        return True
    
    def change_both_color(arbiter, space, data):
        player_shape = arbiter.shapes[0]
        ball_shape = arbiter.shapes[1]
        player_color = random.choice(["red", "green", "blue", "yellow", "purple", "orange", "cyan", "white", "lavender", "brown", "pink"])
        ball_color = random.choice(["red", "green", "blue", "yellow", "purple", "orange", "cyan", "white", "lavender", "brown", "pink"])
        player_shape.color = pygame.Color(player_color)
        ball_shape.color = pygame.Color(ball_color)
        return True

    h = space.add_collision_handler(pb.collision_types["player"], pb.collision_types["ball"])
    h.post_solve = change_both_color
    h.pre_solve = pre_solve

    # restrict movement of player to a straigt line
    move_joint = pymunk.GrooveJoint(
        space.static_body, player_body, (100, 100), (500, 100), (0, 0)
    )
    space.add(player_body, player_shape, move_joint)
    global state
    # Start game
    pb.setup_level(space, player_body)
    with HandLandmarker.create_from_options(options) as landmarker:
        cap = cv2.VideoCapture(0)
        while cap.isOpened() and running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
            success, image = cap.read()
            if not success:
                print("Ignoring empty camera frame.")
      # If loading a video, use 'break' instead of 'continue'.
                continue
            image = cv2.flip(image,1)
            mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=image)
            frame_timestamp_ms = int(time.time() * 1000)
            landmarker.detect_async(mp_image, frame_timestamp_ms)
            
            if detection_result is not None:
                image = draw_landmarks_on_image(mp_image.numpy_view(), detection_result)

                if len(detection_result.hand_landmarks) > 0:
                    landmarks = detection_result.hand_landmarks[0]

        # Obtener coordenadas del índice
                    index_finger_tip = landmarks[8]

        # Convertir coordenadas normalizadas a las dimensiones de la pantalla
                    screen_x = int(index_finger_tip.x * 550)

        # Actualizar la posición del cuerpo del jugador
                    player_body.position = screen_x, 100

    # Actualizar y renderizar pantalla
                screen.fill(pygame.Color("black"))
                space.debug_draw(draw_options)
                fps = 60
                dt = 1.0 / fps
                space.step(dt)
                pygame.display.flip()
                clock.tick(fps)
                cv2.imshow('MediaPipe Hands', image)
                if cv2.waitKey(5) & 0xFF == 27:
                    break
    cap.release()
    cv2.destroyAllWindows()
    pygame.quit()
    return 0



if __name__ == "__main__":
    sys.exit(main())