# a nested if statement is an if statement contained in another if statement

age = 13
weight = 60

if age > 15:
    if weight > 50:
        print("you can donate blood")
    else:
        print("you cannot donate blood due to low weight.")
else:
    print("you cannot donate blood due to your age.")