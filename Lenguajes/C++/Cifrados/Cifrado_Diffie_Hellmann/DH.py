# Fichero que implementa el algoritmo de Diffie-Hellman
# Autores: Airam Prieto González

def CheckPrimo(primo):
        raiz = int(primo ** 0.5)
        for i in range(2, raiz):
                if primo % i == 0:
                        return False
        return True


primo = int(input("Introduce el número primo: "))
if not CheckPrimo(primo):
        print("El número debe ser primo")

base = int(input("Introduce la base: "))
if base >= primo:
        print("La base debe ser menor que el número primo")

xa = int(input("Introduce el número secreto de A: "))
xb = int(input("Introduce el número secreto de B: "))

ya = (base ** xa) % primo
yb = (base ** xb) % primo

ka = (yb ** xa) % primo
kb = (ya ** xb) % primo
if ka == kb:
        print(f"Traza:  p = {primo} base = {base} xa = {xa} xb = {xb} ya = {ya} yb = {yb} k = {ka}" )