# a loop can also be used to iterate through a list,tuple,string,or even a dictionary...
name="dyllan"
for letter in name:
    if letter=="a":
        print("the letter a is in the name dyllan")
    else:
        print(letter)

print('===============')
# below is a list of counties
counties=["nairobi","kisumu","mombasa","nakuru","eldoret","machakos","thika","garissa","malindi"]

print(counties)

for county in counties:
    print(county)

print('===============')
if "nairobi" in counties:
    print("nairobi is in the list of counties")
else:
    print("nairobi is not in the list of counties")

print('===============')
# the loop can be used to iterate through a dictionary

players={
    "name":"mbappe",
    "age":23,
    "team":["paris saint germain","monaco","france"],
    "nationality":"french"
}

for key in players:
    print(players[key])
print('===============')
# loop through the teams the player has played for
for team in players["team"]:
    print(team)
