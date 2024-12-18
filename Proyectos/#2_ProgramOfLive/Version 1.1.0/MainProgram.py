import CodeUtils as Utils
#                                               /// Main Window Configuration ///
Utils.root.title("Game Of Life")
Utils.root.geometry("1000x650")
# Utils.root.iconbitmap("cell.ico")       #   NO FUNCIONA EN UBUNTU
Utils.root.configure(bg = "lightblue", cursor = "tcross")
Utils.ConfigureFrames()
Utils.ChangeFrame(Utils.initial_frame)
Utils.ButtonCreator(Utils.initial_frame, Utils.button_list)
Utils.ClearLattice()

Utils.button_next_gen.pack()
Utils.button_next_gen.place(relx=0.98, rely=0.02, anchor='ne')
Utils.button_auto_play.pack()
Utils.button_auto_play.place(relx=0.98, rely=0.07, anchor='ne')

# Hacer que el botón de ayuda se posicione en la esquina inferior derecha, y que se mantenga ahí aunque se redimensione la ventana
Utils.button_help.pack()
Utils.button_help.place(relx=0.98, rely=0.98, anchor='se')

Utils.button_configuration.pack()
Utils.button_configuration.place(relx=0.02, rely=0.02, anchor='nw')

Utils.button_clear_lattice.pack()
Utils.button_clear_lattice.place(relx=0.02, rely=0.98, anchor='sw')

Utils.gen_label.pack()
Utils.gen_label.place(relx=0.925, rely=0.125, anchor='center')

Utils.root.mainloop()
Utils.initial_window.mainloop()