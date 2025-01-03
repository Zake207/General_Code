import tkinter as tk
import MainProgram.UtilsAlgorithmHub as Utils
import Sorting.SortingAlgorithms as SA

# GLOBAL VARIABLES
entry_var = ""
number_list = []

# FUNCTIONS
def Return():
    Utils.ChangeFrame(Utils.main_frame)
    
def ReturnEntry():
    Utils.ChangeFrame(frame_initial)
    entry_numbers.delete(0, tk.END)

def ReturnSelectSortingAlgorithm():
    Utils.ChangeFrame(frame_select_sorting_algorithm)
    
def ConfigureFrames() -> None:
    frame_initial.place(relwidth = 1, relheight = 1)
    frame_select_sorting_algorithm.place(relwidth = 1, relheight = 1)
    frame_visualization.place(relwidth = 1, relheight = 1)
    frame_comparison.place(relwidth = 1, relheight = 1)
    

def ConvertEntry() -> None:
    entry_var = entry_numbers.get()
    number_list = [int(num) for num in entry_var.split()]
    number_list_label = tk.Label(frame_initial, text = number_list)
    number_list_label.pack()
    number_list_label.place(relx=0.5, rely=0.5, anchor='s')
    button_confirm = tk.Button(frame_initial, text="Confirm", width = 10, height = 1, command = ConfirmEntry)
    button_confirm.pack()
    button_confirm.place(relx=0.5, rely=0.6, anchor='s')
    
def ConfirmEntry() -> None:
    Utils.ChangeFrame(frame_select_sorting_algorithm)
    label_select_sort.pack()
    label_select_sort.place(relx=0.5, rely=0.2, anchor='center')
    button_return_entry.pack()
    button_return_entry.place(relx=0.02, rely=0.02, anchor='nw')
    # Sets the buttons to call the sorting algorithms
    button_BinSort.pack()
    button_BinSort.place(relx=0.5, rely=0.3, anchor='center')
    button_SelectionSort.pack()
    button_SelectionSort.place(relx=0.5, rely=0.35, anchor='center')
    button_RadixSort.pack()
    button_RadixSort.place(relx=0.5, rely=0.4, anchor='center')
    button_MergeSort.pack()
    button_MergeSort.place(relx=0.5, rely=0.45, anchor='center')
    button_QuickSort.pack()
    button_QuickSort.place(relx=0.5, rely=0.5, anchor='center')
    button_BubbleSort.pack()
    button_BubbleSort.place(relx=0.5, rely=0.55, anchor='center')
    button_InsertionSort.pack()
    button_InsertionSort.place(relx=0.5, rely=0.6, anchor='center')
    button_HeapSort.pack()
    button_HeapSort.place(relx=0.5, rely=0.65, anchor='center')
    button_ShellSort.pack()
    button_ShellSort.place(relx=0.5, rely=0.7, anchor='center')
    button_BucketSort.pack()
    button_BucketSort.place(relx=0.5, rely=0.75, anchor='center')

def VisualizeSorting(sorting_type : str) -> None:
    Utils.ChangeFrame(frame_visualization)
    button_return_select_sorting_algorithm.pack()
    button_return_select_sorting_algorithm.place(relx=0.02, rely=0.02, anchor='nw')
    match sorting_type:
        case "Binary Sort":
            SA.BinSort(number_list, False)
            
        case "Selection Sort":
            SA.SelectionSort(number_list, False)
            
        case "Radix Sort":
            SA.RadixSort(number_list, False)
            
        case "Merge Sort":
            SA.MergeSort(number_list, False)
            
        case "Quick Sort":
            SA.QuickSort(number_list, False)
            
        case "Bubble Sort":
            SA.BubbleSort(number_list, False)
            
        case "Insertion Sort":
            SA.InsertionSort(number_list, False)
            
        case "Heap Sort":
            SA.HeapSort(number_list, False)
            
        case "Shell Sort":
            SA.ShellSort(number_list, False)
            
        case "Bucket Sort":
            SA.BucketSort(number_list, False)
            
        case _:
            print("Invalid sorting algorithm")
            ReturnSelectSortingAlgorithm()
    

# TKINTER FRAMES
frame_initial = tk.Frame(Utils.root, bg = "lightblue")
frame_select_sorting_algorithm = tk.Frame(Utils.root, bg = "lightblue")
frame_visualization = tk.Frame(Utils.root, bg = "lightblue")
frame_comparison = tk.Frame(Utils.root, bg = "lightblue")

# TKINTER LABELS
label_select_sort = tk.Label(frame_select_sorting_algorithm, text = "Select a sorting algorithm", bg = "lightblue", font = ("Arial", 12, "bold"))

# TKINTER BUTTONS
button_return = tk.Button(frame_initial, text="Return", width = 10, height = 1, command = Return)
button_submit = tk.Button(frame_initial, text="Submit", width = 10, height = 1, command = ConvertEntry)
button_return_select_sorting_algorithm = tk.Button(frame_visualization, text="Return", width = 10, height = 1, command = ReturnSelectSortingAlgorithm)

button_return_entry = tk.Button(frame_select_sorting_algorithm, text="Return", width = 10, height = 1, command = ReturnEntry)

# Buttons to call the sorting algorithms of the SortingAlgorithms.py
button_BinSort = tk.Button(frame_select_sorting_algorithm, text="Binary Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Binary Sort"))
button_SelectionSort = tk.Button(frame_select_sorting_algorithm, text="Selection Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Selection Sort"))
button_RadixSort = tk.Button(frame_select_sorting_algorithm, text="Radix Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Radix Sort"))
button_MergeSort = tk.Button(frame_select_sorting_algorithm, text="Merge Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Merge Sort"))
button_QuickSort = tk.Button(frame_select_sorting_algorithm, text="Quick Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Quick Sort"))
button_BubbleSort = tk.Button(frame_select_sorting_algorithm, text="Bubble Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Bubble Sort"))
button_InsertionSort = tk.Button(frame_select_sorting_algorithm, text="Insertion Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Insertion Sort"))
button_HeapSort = tk.Button(frame_select_sorting_algorithm, text="Heap Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Heap Sort"))
button_ShellSort = tk.Button(frame_select_sorting_algorithm, text="Shell Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Shell Sort"))
button_BucketSort = tk.Button(frame_select_sorting_algorithm, text="Bucket Sort", width = 10, height = 1, command = lambda: VisualizeSorting("Bucket Sort"))


# TKINTER ENTRY
entry_numbers = tk.Entry(frame_initial)
entry_numbers.config(textvariable = entry_var, width = 20)
