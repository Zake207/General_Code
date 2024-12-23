import tkinter as tk
import UtilsAlgorithmHub as Utils
import SortingAlgorithms as SA

# GLOBAL VARIABLES
entry_var = ""
number_list = []

# FUNCTIONS
def Return():
    Utils.ChangeFrame(Utils.main_frame)
    
def ConfigureFrames() -> None:
    initial_frame.place(relwidth = 1, relheight = 1)
    select_sorting_algorithm_frame.place(relwidth = 1, relheight = 1)

def ConvertEntry() -> None:
    entry_var = entry.get()
    number_list = [int(num) for num in entry_var.split()]
    number_list_label = tk.Label(initial_frame, text = number_list)
    number_list_label.pack()
    number_list_label.place(relx=0.5, rely=0.5, anchor='s')
    button_confirm = tk.Button(initial_frame, text="Confirm", width = 10, height = 1, command = ConfirmEntry)
    button_confirm.pack()
    button_confirm.place(relx=0.5, rely=0.6, anchor='s')
    
def ConfirmEntry() -> None:
    Utils.ChangeFrame(select_sorting_algorithm_frame)
    label_select_sort.pack()
    label_select_sort.place(relx=0.5, rely=0.2, anchor='center')
    # Sets the 31 buttons for the Sorting algorithm
    button_BinSort.pack()
    button_BinSort.place(relx=0.5, rely=0.3, anchor='center')
    
    pass

# TKINTER FRAMES
initial_frame = tk.Frame(Utils.root, bg = "lightblue")
select_sorting_algorithm_frame = tk.Frame(Utils.root, bg = "lightblue")

# TKINTER LABELS
label_select_sort = tk.Label(select_sorting_algorithm_frame, text = "Select a sorting algorithm", bg = "lightblue")

# TKINTER BUTTONS
button_return = tk.Button(initial_frame, text="Return", width = 10, height = 1, command = Return)
button_submit = tk.Button(initial_frame, text="Submit", width = 10, height = 1, command = ConvertEntry)

# Buttons to call the sorting algorithms of the SortingAlgorithms.py
button_BinSort = tk.Button(select_sorting_algorithm_frame, text="Binary Sort", width = 10, height = 1, command = lambda: SA.BinSort(number_list))
button_SelectionSort = tk.Button(select_sorting_algorithm_frame, text="Selection Sort", width = 10, height = 1, command = lambda: SA.SelectionSort(number_list))
button_RadixSort = tk.Button(select_sorting_algorithm_frame, text="Radix Sort", width = 10, height = 1, command = lambda: SA.RadixSort(number_list))
button_MergeSort = tk.Button(select_sorting_algorithm_frame, text="Merge Sort", width = 10, height = 1, command = lambda: SA.MergeSort(number_list))
button_QuickSort = tk.Button(select_sorting_algorithm_frame, text="Quick Sort", width = 10, height = 1, command = lambda: SA.QuickSort(number_list))
button_BubbleSort = tk.Button(select_sorting_algorithm_frame, text="Bubble Sort", width = 10, height = 1, command = lambda: SA.BubbleSort(number_list))
button_InsertionSort = tk.Button(select_sorting_algorithm_frame, text="Insertion Sort", width = 10, height = 1, command = lambda: SA.InsertionSort(number_list))
button_HeapSort = tk.Button(select_sorting_algorithm_frame, text="Heap Sort", width = 10, height = 1, command = lambda: SA.HeapSort(number_list))
button_ShellSort = tk.Button(select_sorting_algorithm_frame, text="Shell Sort", width = 10, height = 1, command = lambda: SA.ShellSort(number_list))


# TKINTER ENTRY
entry = tk.Entry(initial_frame)
entry.config(textvariable = entry_var, width = 20)
