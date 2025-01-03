import MainProgram.UtilsAlgorithmHub as Utils
import Sorting.UtilsSorting as UtilsSorting

def Sorting():
    #                                              /// Main Window Configuration ///
    Utils.root.title("Sorting Algorithm Hub")
    Utils.root.geometry("800x600")
    Utils.root.configure(bg = "lightblue", cursor = "tcross")
    UtilsSorting.ConfigureFrames()
    Utils.ChangeFrame(UtilsSorting.frame_initial)
    
    UtilsSorting.button_return.pack()
    UtilsSorting.button_return.place(relx=0.02, rely=0.02, anchor='nw')
    UtilsSorting.button_submit.pack()
    UtilsSorting.button_submit.place(relx=0.5, rely=0.35, anchor='center')
    
    UtilsSorting.entry_numbers.pack()
    UtilsSorting.entry_numbers.place(relx=0.5, rely=0.25, anchor='center')