#below is a merit based student grading system
marks= int (input("enter student marks: "))
# print ("the entered marks is", marks)
if marks >=0 and  marks <30:
    print("below average")
elif marks>=30 and marks <40:
    print("average")
elif marks >=40 and marks <70:
    print(" above average")
elif marks>=70 and marks <=100 :
    print("excellent!!!")
else:
    print("PUNGUZA  JABA")
