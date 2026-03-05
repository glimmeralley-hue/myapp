# python modules
# a python module is a file that contains python definitions and/or functions,statements


def add():
    num1=20
    num2=30
    sum=num1+num2
    print("the sum is",sum)


def subtract():
    x=45
    y=30
    difference=x-y
    print("the difference is",difference)



def rectanglearea():
    length=int(input("enter the length of the rectangle"))
    width=int(input("enter the width of the rectangle"))
    area=length*width
    print("the area of the rectangle is",area)

 #these functions defined can be called into other files as a module by importing the file name and calling the function name