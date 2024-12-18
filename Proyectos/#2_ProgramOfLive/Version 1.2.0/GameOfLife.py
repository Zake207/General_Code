import UtilsGameOfLife
import UtilsAlgorithmHub as Utils
    #                                               /// Main Window Configuration ///
def GameOfLife() :
    Utils.root.title("Game of Life")
    UtilsGameOfLife.ConfigureFrames()
    UtilsGameOfLife.ChangeFrame(UtilsGameOfLife.initial_frame)
    UtilsGameOfLife.ButtonCreator(UtilsGameOfLife.initial_frame, UtilsGameOfLife.button_list)
    UtilsGameOfLife.ClearLattice()

    UtilsGameOfLife.button_next_gen.pack()
    UtilsGameOfLife.button_next_gen.place(relx=0.98, rely=0.02, anchor='ne')
    UtilsGameOfLife.button_auto_play.pack()
    UtilsGameOfLife.button_auto_play.place(relx=0.98, rely=0.07, anchor='ne')

    # Hacer que el botón de ayuda se posicione en la esquina inferior derecha, y que se mantenga ahí aunque se redimensione la ventana
    UtilsGameOfLife.button_help.pack()
    UtilsGameOfLife.button_help.place(relx=0.98, rely=0.98, anchor='se')

    UtilsGameOfLife.button_menu.pack()
    UtilsGameOfLife.button_menu.place(relx=0.02, rely=0.02, anchor='nw')

    UtilsGameOfLife.button_clear_lattice.pack()
    UtilsGameOfLife.button_clear_lattice.place(relx=0.02, rely=0.98, anchor='sw')

    UtilsGameOfLife.gen_label.pack()
    UtilsGameOfLife.gen_label.place(relx=0.925, rely=0.125, anchor='center')