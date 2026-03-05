#boolean -this is a data type that evaluates true or false
israining = False
print(israining)
print(type(israining))
paidloan= True
print(paidloan)
print(type(paidloan))

# comparison operators: they are used to compare two or more statements and they usually return a boolean answer

number1=2
number2=5

print("is number 1 greater than number 2",number1 > number2)
print("is number 1 less than number 2",number1 < number2)
print("is number 1 greater than or equal to number 2",number1>= number2)
print("is number 1 less than or equal to number 2",number1<=number2)
print("is number 1 equal to number 2",number1==number2)
print("is number 1 not equal to number 2",number1 !=number2)

#logical operators
#logical AND
#output is true only if the  both statements evaluates to true
print((3>1) and (7>6))

#logical OR
#it evaluates to true if one of the statements is true
print((3>1) or (7<6))

#logical not
#it is used to negate a statement
print(not (90>70))