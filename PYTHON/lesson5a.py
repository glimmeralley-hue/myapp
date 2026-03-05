# python functions
# they are a block of code/statements that perform a given task/action.they can be reused throughout the program to perform different tasks.
# functions are defined using the def keyword(define) followed by the function name and parentheses. the code block within every function starts with a colon (:) and is indented.
# we havet two main types:
#1. in-built functions: they come pre-installed with the interpreter i.e print().pop(),range(),append()
#2. user-defined functions: they are created by a programmer to solve a given task 
# to define a function we give it a name followed by parentheses
# for the function body,it is usually indented and to invoke a function we use the function name.




def greetings():
    print("hello,how are you")

# below we call the function by use of its name
greetings() # invoking the function

print("============================")
# addition function
def addition():
    num1=40
    num2=50
    sum=num1+num2
    print("the sum of the numbers is:",sum)

addition() # invoking the function

print("============================")
# create a function that is able to multiply three values
def multiplication():
    num1=20
    num2=40
    num3=60
    product=num1*num2*num3
    print("the product of the numbers is:",product)

multiplication() # invoking the function

print("============================")
# division function
def division():
    num1=int(input("enter the first number:"))
    num2=int(input("enter the second number:"))
    quotient=num1/num2
    print("the quotient of the numbers is:",quotient)
    print("----------")
for function in range(3):
        division() # invoking the function

division() # invoking the function

