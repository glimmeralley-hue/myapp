import random
dice = random.randint(1, 6)
print("You rolled a", dice)
while True:
    roll_again = input("Roll again? (y/n): ")
    if roll_again.lower() == 'y':
        dice = random.randint(1, 6)
        print("You rolled a", dice)
    elif roll_again.lower() == 'n':
        print("Thanks for playing!")
        break
    else:
        print("Invalid input. Please enter 'y' or 'n'.")