import tkinter as tk

# Función para cambiar entre frames
def mostrar_frame(frame):
    frame.tkraise()  # Eleva el frame especificado al frente

# Configurar la ventana principal
root = tk.Tk()
root.title("Cambio de Pantallas")
root.geometry("400x300")  # Tamaño de la ventana

# --- Crear los contenedores (Frames) ---
frame_principal = tk.Frame(root, bg="lightblue")
frame_secundario = tk.Frame(root, bg="lightgreen")

# Configurar los frames para que ocupen todo el espacio disponible
for frame in (frame_principal, frame_secundario):
    frame.grid(row=0, column=0, sticky="nsew")  # sticky="nsew" expande el frame en todas direcciones

# --- Contenido del frame principal ---
label_principal = tk.Label(frame_principal, text="¡Pantalla Principal!", font=("Arial", 18), bg="lightblue")
label_principal.pack(pady=50)

btn_ir_secundario = tk.Button(frame_principal, text="Ir a la Pantalla Secundaria", font=("Arial", 12),
                              command=lambda: mostrar_frame(frame_secundario))
btn_ir_secundario.pack()

# --- Contenido del frame secundario ---
label_secundario = tk.Label(frame_secundario, text="¡Pantalla Secundaria!", font=("Arial", 18), bg="lightgreen")
label_secundario.pack(pady=50)

btn_volver_principal = tk.Button(frame_secundario, text="Volver a la Pantalla Principal", font=("Arial", 12),
                                 command=lambda: mostrar_frame(frame_principal))
btn_volver_principal.pack()

# Mostrar el frame principal al inicio
mostrar_frame(frame_principal)

# Iniciar el bucle de la aplicación
root.mainloop()
    