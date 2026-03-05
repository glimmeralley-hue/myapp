# Test 1
# By use of a function that accepts parameters, calculate the simple interest given principal as 45000, rate is 7% and the time taken is 8 years. (si = p*r*t/100)
# Use the same function inside of a loop to calculate two other simple interests. Note use your own principal, rate and time.
def simple_interest(principal, rate, time):
    si = (principal * rate * time) / 100
    print(f"Simple interest is {si}")

simple_interest(45000, 7, 8)

# Loop to calculate two other simple interests
interests = [
    (30000, 5, 6),
    (60000, 12, 4)
]

for p, r, t in interests:
    simple_interest(p, r, t)