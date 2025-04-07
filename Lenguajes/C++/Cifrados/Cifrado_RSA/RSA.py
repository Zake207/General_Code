import math
import random

# Diccionario para el alfabeto incluyendo ñ y w
ALPHABET = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4,
                        'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
                        'K': 10, 'L': 11, 'M': 12, 'N': 13,
                        'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18,
                        'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23,
                        'Y': 24, 'Z': 25}

def Is_Prime(n):
    k = 10
    if n < 2:
        return False
    # Casos base
    if n in (2, 3, 5, 7):
        return True
    if n % 2 == 0:
        return False

    for _ in range(k):
        # número aleatorio a en [1, n-1]
        a = random.randint(1, n - 1)
        
        # Si gcd(a, n) > 1, entonces n es compuesto
        if math.gcd(a, n) > 1:
            return False
        exp = (n - 1) // 2
        mod_exp = pow(a, exp, n)
        
        if mod_exp not in {1, n - 1}:
            return False  # No cumple la condición, es compuesto
    return True 

def Exp(base, exponent, mod):
    result = 1 
    base = base % mod
    while exponent > 0:
        if exponent % 2 == 1:
            result = (result * base) % mod
        base = (base * base) % mod
        exponent //= 2
    return result
        

def Encode(text, n) -> list:
        # Calculo los exponenciales 27^a < n < 27^b
        exp_a = 0
        exp_b = 0
        while (27 ** exp_b) < n:
                exp_b += 1
        exp_a = exp_b - 1
        if len(text) % exp_a != 0:
                text += 'X' * (exp_a - (len(text) % exp_a))
        # print(f"Exponentes: {exp_a} {exp_b}")
        # print(f"Texto: {text}")
        # Meto las subcadenas en un vector
        sub_string_array = []
        # Dividir en sub-strings
        for i in range(int(len(text) / exp_a)):
                sub_string = text[i*exp_a:i*exp_a + exp_a]
                sub_string_array.append(sub_string)
                
        print(f"Texto separado: {sub_string_array}")
        encoded_array = []
        # Codificar en números
        for word in sub_string_array:
                word_in_number = 0
                exp = 0
                for char in word[::-1]:
                        word_in_number += ALPHABET[char] * (26 ** exp)
                        exp += 1
                encoded_array.append(word_in_number)
        return encoded_array

def Extended_Euclidean_Algorithm(dividendo, divisor):
    z_0, z_1 = 1, 0 

    piv_dividendo, piv_divisor = dividendo, divisor

    while piv_divisor != 0:
        cociente = piv_dividendo // piv_divisor  # Cociente de la división
        piv_dividendo, piv_divisor = piv_divisor, piv_dividendo % piv_divisor  # Actualización de valores
        z_0, z_1 = z_1, z_0 - cociente * z_1

    if (z_0 < 0):
            z_0 += divisor
    return piv_dividendo, z_0
        
def RSA(encoded_message, x, n) -> list:
        for i in range(len(encoded_message)):
                encoded_message[i] = Exp(encoded_message[i], x, n)
        return encoded_message
        

message = input("Introduce el mensaje: ")
message = message.upper().replace(' ', '').replace('Ñ', '')
p = int(input("Introduce el número primo p: "))
q = int(input("Introduce el número primo q: "))
d = int(input("Introduce el numero d: "))


if not Is_Prime(p):
        print("El número p debe ser primo")
        exit()
    
if not Is_Prime(q):
        print("El número q debe ser primo")
        exit()

n = p * q # n es el módulo para la clave pública y privada
phi = (p - 1) * (q - 1) # Phi es la función totient de Euler
is_prime, e = Extended_Euclidean_Algorithm(d,phi)
if (is_prime != 1):
        print(f"El valor de la constante d ({d}) no es primo con phi ({phi})")
        exit()
print(f"Phi: {phi}")
print(f"n: {n}")
print(f"e: {e}")



encoded_message = Encode(message, n)
print(f"Texto codificado: {encoded_message}")
encoded_message = RSA(encoded_message, e, n)
print(f"Texto cifrado: {encoded_message}")
encoded_message = RSA(encoded_message, d, n)
print(f"Texto descifrado: {encoded_message}")



