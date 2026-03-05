#1. a function that takes no parameters,uses arithmetic operators to calculate the area of a rectangle and prints the result

def area ():
    length=5
    width=20
    area=length*width
    print(area)

area() # invoking the function
print("============================")


#2. a function that accepts two parameters,returns their sum,difference,product and division
def arithmetic_operations(num1,num2):
    sum=num1+num2
    difference=num1-num2
    product=num1*num2
    division=num1/num2
    return sum,difference,product,division

result=arithmetic_operations(10,5)
print("The sum is:",result[0])
print("The difference is:",result[1])
print("The product is:",result[2])
print("The division is:",result[3])


print("============================")




#3. a function that accepts a number(uses input function),checks whether the number is positive,negative or zero and prints the result,using if,elif,else
def check_number():
    
    num=int(input("Enter a number: "))
    if num>0:
        print("The number is positive.")
    elif num<0:
        print("The number is negative.")
    else:
        print("The number is neutral.")

check_number() # invoking the function
print("============================")


#4. a function that accepts the number n,uses a for loop and calculates the sum of numbers from 1 to n
def sum_of_numbers(n):
    sum=0
    for i in range(1,n+1):
        sum+=i
    print("The sum of numbers from 1 to",n,"is:",sum)
n=int(input("Enter a number: "))
sum_of_numbers(n)
print("============================")


# 5.a function that accepts a number ,uses a while loop and calculates the square of numbers from 1 to that number
def square_of_numbers(n):
    i=1
    while i<=n:
        square=i**2
        print("The square of",i,"is:",square)
        i+=1
n=int(input("Enter a number: "))
square_of_numbers(n)    

