# Fichero que implementa el algoritmo de Diffie-Hellman
# Autores: Airam Prieto González

def CheckPrimo(primo):
        raiz = int(primo ** 0.5)
        for i in range(2, raiz):
                if primo % i == 0:
                        return False
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


primo = int(input("Introduce el número primo: "))
if not CheckPrimo(primo):
        print("El número debe ser primo")
        exit()

base = int(input("Introduce la base: "))
if base >= primo:
        print("La base debe ser menor que el número primo")
        exit()

xa = int(input("Introduce el número secreto de A: "))
xb = int(input("Introduce el número secreto de B: "))

ya = Exp(base, xa, primo)
yb = Exp(base, xb, primo)

ka = Exp(yb, xa, primo)
kb = Exp(ya, xb, primo)
if ka == kb:
        print(f"Traza:  p = {primo} base = {base} xa = {xa} xb = {xb} ya = {ya} yb = {yb} k = {ka}" )