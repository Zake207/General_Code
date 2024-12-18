import tkinter as tk

def resize(event):
    new_width = event.width
    new_height = event.height
    # Ajustar fuente en función del tamaño de la ventana
    font_size = int(min(new_width, new_height) * 0.02)  # Escalar fuente proporcionalmente
    button.config(font=("Arial", font_size))

root = tk.Tk()
root.geometry("800x600")

button = tk.Button(root, text="Botón adaptable")
button.pack(expand=True, fill="both")

# Vincular la función al redimensionamiento de la ventana
root.bind("<Configure>", resize)

root.mainloop()
