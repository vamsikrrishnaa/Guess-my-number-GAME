import tkinter as tk
from tkinter import messagebox

# Function to update the expression in the text entry box
def press(num):
    global expression
    expression = expression + str(num)
    equation.set(expression)

# Function to evaluate the final expression
def equalpress():
    try:
        global expression
        total = str(eval(expression))
        equation.set(total)
        expression = ""
    except:
        equation.set(" error ")
        expression = ""

# Function to clear the contents of text entry box
def clear():
    global expression
    expression = ""
    equation.set("")

# Driver code
if __name__ == "__main__":
    # Create a GUI window
    gui = tk.Tk()
    gui.configure(background="light green")
    gui.title("Simple Calculator")
    gui.geometry("270x150")

    expression = ""
    equation = tk.StringVar()

    # Create a text entry box for showing the expression
    expression_field = tk.Entry(gui, textvariable=equation)
    expression_field.grid(columnspan=4, ipadx=70)

    # Create buttons and place them in the grid
    button1 = tk.Button(gui, text=' 1 ', fg='black', bg='blue', command=lambda: press(1), height=1, width=7)
    button1.grid(row=2, column=0)

    button2 = tk.Button(gui, text=' 2 ', fg='black', bg='red', command=lambda: press(2), height=1, width=7)
    button2.grid(row=2, column=1)

    button3 = tk.Button(gui, text=' 3 ', fg='black', bg='red', command=lambda: press(3), height=1, width=7)
    button3.grid(row=2, column=2)

    button4 = tk.Button(gui, text=' 4 ', fg='black', bg='red', command=lambda: press(4), height=1, width=7)
    button4.grid(row=3, column=0)

    button5 = tk.Button(gui, text=' 5 ', fg='black', bg='red', command=lambda: press(5), height=1, width=7)
    button5.grid(row=3, column=1)

    button6 = tk.Button(gui, text=' 6 ', fg='black', bg='red', command=lambda: press(6), height=1, width=7)
    button6.grid(row=3, column=2)

    button7 = tk.Button(gui, text=' 7 ', fg='black', bg='red', command=lambda: press(7), height=1, width=7)
    button7.grid(row=4, column=0)

    button8 = tk.Button(gui, text=' 8 ', fg='black', bg='red', command=lambda: press(8), height=1, width=7)
    button8.grid(row=4, column=1)

    button9 = tk.Button(gui, text=' 9 ', fg='black', bg='red', command=lambda: press(9), height=1, width=7)
    button9.grid(row=4, column=2)

    button0 = tk.Button(gui, text=' 0 ', fg='black', bg='red', command=lambda: press(0), height=1, width=7)
    button0.grid(row=5, column=0)

    plus = tk.Button(gui, text=' + ', fg='black', bg='red', command=lambda: press("+"), height=1, width=7)
    plus.grid(row=2, column=3)

    minus = tk.Button(gui, text=' - ', fg='black', bg='red', command=lambda: press("-"), height=1, width=7)
    minus.grid(row=3, column=3)

    multiply = tk.Button(gui, text=' * ', fg='black', bg='red', command=lambda: press("*"), height=1, width=7)
    multiply.grid(row=4, column=3)

    divide = tk.Button(gui, text=' / ', fg='black', bg='red', command=lambda: press("/"), height=1, width=7)
    divide.grid(row=5, column=3)

    equal = tk.Button(gui, text=' = ', fg='black', bg='red', command=equalpress, height=1, width=7)
    equal.grid(row=5, column=2)

    clear = tk.Button(gui, text='Clear', fg='black', bg='red', command=clear, height=1, width=7)
    clear.grid(row=5, column=1)

    # Start the GUI
    gui.mainloop()