# create a python program that is able to determine whether a number entered is an odd number or an even number
# number=int(input("enter number"))
# if number%2==0:
#     print("the number is even")
# else:    print("the number is odd")

#program to determine whether a person can donate blood or not.If the person is above 50kg and above 18 years old, then they can donate blood.if not,they are not elligible to donate blood
weight=float(input("enter weight"))
age=int(input("enter age"))
if weight>=50 and age>=18:
    print("you can donate blood")
else:
    print("you are not elligible to donate blood")