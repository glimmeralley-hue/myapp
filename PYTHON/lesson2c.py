# a dictionary is a data type that stores data in terms of key-value pair
#it is introduced by use of  calibraces{}
 #the values stored inside of a dictionary can be of any data type
#to access the values in a dictionary we use the keys

phonebook ={
    "benson":"7521325623",
    "benvey":"4325213269",
    "beniah":"1234565623"


}

#showing the entire dictionary
print(phonebook)
print(type(phonebook))

#print out bensons number
print(phonebook["benson"])

print('===============')

player ={
    "name": "Messi",
    "age": 40,
    "teams": ["psg", "barcelona", "argentina"],
   "more": {
       "children":3,
       "residence": "US",
       "phone":(5454545577565,556586899,6556677878)
       
   }
}

#print barcelona -the team he played for
print("the team he played for is",player["teams"][1])
#print messi second phone number
print("messis second phone number is",player["more"]["phone"][1])
 