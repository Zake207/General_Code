import tkinter as tk

def procesar_entrada():
    entrada = entry.get()  # Obtener el texto del Entry
    try:
        lista_numeros = [int(num) for num in entrada.split()]  # Convertir a lista de enteros
        print("Lista de enteros:", lista_numeros)
    except ValueError:
        print("Por favor, introduce solo números separados por espacios.")

# Configuración de la ventana de Tkinter
root = tk.Tk()
root.title("Entrada a lista de enteros")

# Entry para la entrada del usuario
entry = tk.Entry(root, width=30)
entry.pack(pady=10)

# Botón para procesar la entrada
boton = tk.Button(root, text="Procesar", command=procesar_entrada)
boton.pack(pady=10)

root.mainloop()
