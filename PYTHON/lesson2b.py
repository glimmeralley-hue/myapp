#tuple
#it is an immutable part of a list-cannot change
 # to introduce a tuple, we use the parentheses()


counties=("nairobi","mombasa","kajiado","sydney","narok","newyork")

print(counties)
print(type(counties))

#slicing of tuples
print(counties[3:])

#accesing items of a tuple by use of the indexes

print(counties[5])

#NOTE:BELLOW WILL GENERATE AN ERROR

counties.append("machakos")
print(counties)