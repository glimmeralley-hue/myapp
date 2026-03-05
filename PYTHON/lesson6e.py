# on the try and except block,you run some code and if it is succesful,the try block will get executed when there is an anticipated error
try:
    number =100
    answer= number/0
    print(answer)
except Exception as e:
    print("an error occured",e)