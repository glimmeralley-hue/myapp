#loops ->sometimes,we may need to do a piece of work a number of times,for example,if we want to print the numbers from 1 to 10,we can make loops
#it is a control structure that allows to execute a block of code repeatedly as long as a certain condition is met

# below is the syntax of a foreloop in python
"""
for a variable in range(n)
# code to be executed
"""
for greeting in range(5):
     print("hello dyllan", greeting)

print('===============')

for number in range (10,20):
    print(number)

print('===============')
 # find the even numbers in the range of 50 to 71

for number in range (50,71 , 2):
         print(number)
         
print('===============')
# create a python programme that prints the odd numbers from  100 to 150
for number in range (101,150 , 2):
         print(number)

print('===============')
# create a program that prints the multiples of 3 from 201 to 150
for number in range (201,150 , -3):
         print(number)

print('===============')
 # create a python programme that prints the leap years in between 2000 and 2024
for year in range (2000,2025,4):
         print(year)
