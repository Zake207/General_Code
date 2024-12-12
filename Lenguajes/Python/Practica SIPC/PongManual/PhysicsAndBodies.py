
import time
import random
import sys
import pygame
import pymunk
import pymunk.pygame_util
from pymunk import Vec2d

collision_types = {
    "ball": 1,
    "brick": 2,
    "bottom": 3,
    "player": 4,
}

# Función que genera la pelota dada una dirección, posición y espacio.
def spawn_ball(space, position, direction):
    ball_body = pymunk.Body(1, float("inf"))
    ball_body.position = position

    ball_shape = pymunk.Circle(ball_body, 5)
    ball_shape.color = pygame.Color("green")
    ball_shape.elasticity = 1.0
    ball_shape.collision_type = collision_types["ball"]

    ball_body.apply_impulse_at_local_point(Vec2d(*direction))

    # mantener la velocidad de la pelota a un valor constante
    def constant_velocity(body, gravity, damping, dt):
        body.velocity = body.velocity.normalized() * 400
    ball_body.velocity_func = constant_velocity
    space.add(ball_body, ball_shape)
    
def setup_level(space, player_body):
    # Remove balls and bricks
    for s in space.shapes[:]:
        if s.body.body_type == pymunk.Body.DYNAMIC and s.body not in [player_body]:
            space.remove(s.body, s)

    # Genrera la primera pelota
    spawn_ball(
        space, player_body.position + (0, 40), random.choice([(1, 10), (-1, 10)])
    )
    # Genera los ladrillos
    for x in range(25):
        x = x * 20 + 60
        for y in range(11):
            y = y * 10 + 400
            brick_body = pymunk.Body(body_type=pymunk.Body.KINEMATIC)
            brick_body.position = x, y
            brick_shape = pymunk.Poly.create_box(brick_body, (20, 10))
            brick_shape.elasticity = 1.0
            brick_shape.color = pygame.Color("blue")
            brick_shape.group = 1
            brick_shape.collision_type = collision_types["brick"]
            space.add(brick_body, brick_shape)
    # Función que elimina un ladrillo al contacto con la pelota
    def remove_brick(arbiter, space, data):
        brick_shape = arbiter.shapes[0]
        space.remove(brick_shape, brick_shape.body)
        
    def change_color(arbiter, space, data):
        ball_shape = arbiter.shapes[1]
        color = random.choice(["red", "green", "blue", "yellow", "purple", "orange", "cyan", "white", "lavender", "brown", "pink"])
        ball_shape.color = pygame.Color(color)
        return True

    h = space.add_collision_handler(collision_types["brick"], collision_types["ball"])
    h.begin = change_color
    h.separate = remove_brick
