import GameOfLife.Lattice as Lattice
import tkinter
import tkinter.messagebox
import MainProgram.UtilsAlgorithmHub as Utils

###                                                         /// GLOBAL VARIABLES ///
gen_number = 0
main_lattice = Lattice.Lattice(20, 20)
instructions_of_the_game = open("./GameOfLife/GameOfLifeInstructions.txt").read()
button_list = list()
AutoPlayFlag = False
        
# /// TKINTER FRAMES
initial_frame = tkinter.Frame(Utils.root, bg = "lightblue")
config_frame = tkinter.Frame(Utils.root, bg = "lightblue")
help_frame = tkinter.Frame(Utils.root, bg = "lightblue")

###                                                         /// FUNCTIONS ///
def ConfigureFrames() -> None:
    initial_frame.place(relwidth = 1, relheight = 1)
    config_frame.place(relwidth = 1, relheight = 1)
    help_frame.place(relwidth = 1, relheight = 1)
    
def Help() -> None:
    Utils.ChangeFrame(help_frame)
    button_help_return.pack()
    button_help_return.place(relx=0.02, rely=0.02, anchor='nw')
    instructions_of_the_game_label.pack()
    instructions_of_the_game_label.place(relx=0.5, rely=0.3, anchor='center')
    title_instructions_of_the_game_label.pack()
    title_instructions_of_the_game_label.place(relx=0.5, rely=0.1, anchor='center')

def ReturnToMainMenu() -> None:
    Utils.ChangeFrame(Utils.main_frame)
    button_help_return.pack_forget()
    instructions_of_the_game_label.pack_forget()
    title_instructions_of_the_game_label.pack_forget()
    
def NextGen() -> None:
    global gen_number
    if gen_number != 0:
        main_lattice.CalculateNextGeneration()
        main_lattice.UpdateGeneration()
    gen_number += 1
    gen_label.config(text = f"\nGEN: {gen_number}")
    for button in button_list:
        button.UpdateColor()

def ClearLattice() -> None:
    main_lattice.Clear()
    gen_number = 0
    gen_label.config(text = f"\nGEN: {gen_number}")
    for button in button_list:
        button.UpdateColor()

def ButtonCreator(frame, button_list) :
    button_list.clear()
    for i in range(20):
        for j in range(20):
            aux_button = MatrixButton(i,j, frame)
            button_list.append(aux_button)
    pos_x = 0.2
    pos_y = 0.025
    for i in range(20):
        for j in range(20):
            button_list[i*20 + j].PlaceButton(pos_x, pos_y)
            pos_x += 0.033333333333333
        pos_x = 0.2
        pos_y += 0.05
    

def SubmitPosition(x, y) -> None:
    main_lattice.SwitchState(x, y)
    button_list[x*20 + y].UpdateColor()
    
def AutoPlay() -> None:
    global AutoPlayFlag
    if not AutoPlayFlag:
        AutoPlayFlag = True
        button_auto_play.config(text = "Stop", fg = "red")
    else:
        AutoPlayFlag = False
        button_auto_play.config(text = "Auto Play", fg = "green")
    while AutoPlayFlag:
        NextGen()
        Utils.root.update()
        Utils.root.after(100)

    


###                                                         /// TKINTER ELEMENTS ///
# /// LABELS
gen_label = tkinter.Label(initial_frame, bg = "lightblue", text = f"\nGEN: {gen_number}\n\n", font = ("courier", 14, "bold"))
instructions_of_the_game_label = tkinter.Label(help_frame, bg = "lightblue", text = instructions_of_the_game, font = ("courier", 10, "bold"))
title_instructions_of_the_game_label = tkinter.Label(help_frame, bg = "lightblue", text = "GAME OF LIFE", font = ("courier", 14, "bold"))
# /// BUTTONS
button_clear_lattice = tkinter.Button(initial_frame, text = "Clear", fg = "orange", bg = "lightgrey", width = 7, command = ClearLattice)
button_menu = tkinter.Button(initial_frame, text = "Back To Menu", fg = "blue", bg = "lightgrey", command = ReturnToMainMenu)
button_help = tkinter.Button(initial_frame, text = "Help", fg = "red", bg = "lightgrey", command = Help)
button_next_gen = tkinter.Button(initial_frame, text = "Next Gen", fg = "green", bg = "lightgrey", width = 7, command = NextGen)
button_help_return = tkinter.Button(help_frame, text = "Return", fg = "red", bg = "lightgrey", width = 7, command = lambda: Utils.ChangeFrame(initial_frame))
button_auto_play = tkinter.Button(initial_frame, text = "Auto Play", fg = "green", bg = "lightgrey", width = 7,command = AutoPlay)

###                                                         /// CLASSES ///
class MatrixButton:
    __coor_x = 0
    __coor_y = 0
    __button_func = 0
    __button = 0
    
    def __init__(self, x, y, initial_frame) -> None:
        self.__coor_x = x
        self.__coor_y = y
        self.__button_func = lambda: SubmitPosition(self.__coor_x, self.__coor_y)
        self.__button = tkinter.Button(initial_frame, width = 1, height = 1, command = self.__button_func)
        pass
    
    def PlaceButton(self, x, y) -> None:
        self.__button.place(relx = x, rely = y, anchor = "center")
        
    def UpdateColor(self):
        self.__button.config(bg = "black" if main_lattice.IsAlive(self.__coor_x, self.__coor_y) else "white")
