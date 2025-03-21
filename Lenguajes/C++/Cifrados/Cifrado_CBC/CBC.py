import AES

# Inicialización de variables
key: str = "000102030405060708090a0b0c0d0e0f"
iv: str = "00000000000000000000000000000000"
message: str = "00112233445566778899aabbccddeeff00000000000000000000000000000000"
message_vector = []
# Rellenamos el vector del mensaje
for i in range (0, len(message), 32):
    message_vector.append(message[i:i+32])
prev_cipher = iv
# Calculamos el resultado
result = []
for block in message_vector:
    print(prev_cipher + " XOR " + block)
    pivot = bytes(a ^ b for a, b in zip(bytes.fromhex(prev_cipher), bytes.fromhex(block)))
    pivot_hex = pivot.hex()
    encrypted_block = AES.AES(key, pivot_hex)
    result.append(encrypted_block)
    prev_cipher = encrypted_block

print(result)


    
    





