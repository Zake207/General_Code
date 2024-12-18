import UtilsAlgorithmHub as Utils
import GameOfLife

def main():
    #                                              /// Main Window Configuration ///
    Utils.root.title("Algorithm Hub")
    Utils.root.geometry("800x600")
    Utils.root.configure(bg = "lightblue", cursor = "tcross")
    #                                             /// Button Configuration ///
    # Button to open the Game of Life
    Utils.button_game_of_life.config(command = GameOfLife.GameOfLife)
    Utils.button_game_of_life.pack()
    Utils.button_game_of_life.place(relx=0.5, rely=0.5, anchor='center')
    # Button to open the Sorting Algorithm Hub
    
    #                                              /// Main Loop ///
    Utils.root.mainloop()

if __name__ == "__main__":
    main()
