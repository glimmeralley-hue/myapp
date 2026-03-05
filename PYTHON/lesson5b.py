# functions with parameters
# they are values that get passed as arguments  given to a function inside of the parentheses.
def greeting(name):
    print(f"hello {name}, how are you?")

greeting("dyllan")
greeting("sarah")
greeting("michael")

print("==============")
def message(names):
    print(f"hello {names}, how are you? We shall have a meeting soon.")

message("allen")
message("michael")


print("==============")
#create a function that accepts parameters to add two numbers
def add(num1, num2):
    sum= num1 + num2
    print(f"the sum of {num1} and {num2} is {sum}")

add(5, 10)
add(20, 30)