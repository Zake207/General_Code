import tkinter as tk


root = tk.Tk()

main_frame = tk.Frame(root, bg = "lightblue")
main_frame.place(relwidth = 1, relheight = 1)

button_game_of_life = tk.Button(main_frame, text="Game of Life")

