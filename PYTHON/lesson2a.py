#a list  in opython is a collection of items that are ordered in a certain way
#a list is  introduced the by square bracket[]
#the items of a list are stored inside of indexes:NOTE,In programming we start counting from index Zero[0].bmw,benze,hiance,...
#the contents of a list can be changed-mutability

cars= ["BMW","BENZE","HIANCE","RANGE","MCLAREN","MERCEDES"]

print(cars)
print(type(cars))


# accessing the contents of a list

print(cars[2])
print("the car on index four is",cars[4])


#list  slicing-this is creating a list from a bigger list

print(cars[4:])

#printing from index 0 to 3
print(cars[:4])

#print from hiance to mclaren
print(cars[2:5])

# list-mutability
#we use the function append to add an item tpo the end of a list

cars.append("mercedes")
print(cars)

cars.append("subaru")
print(cars)

# we use the pop function to remove an item at the end of the list  
cars.pop()
print(cars)

#we can use an index to add items to a list
cars[5]="pajero"
print(cars)
#we can use the sort function to sort items in alphabetical order

cars.sort(reverse=True)
print(cars)

del cars[3]
print(cars)