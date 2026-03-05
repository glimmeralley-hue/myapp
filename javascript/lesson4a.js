// functions with parameters.
// parameters are values that get passed as arguments when you invoke a function.
//they help us to create functions that can be re-usable through out a program.
 function greeting(name){
    console.log("hello",name,"how have you been?")
 }

 greeting("allen glimmer")
 greeting("joe gitau")
 greeting("malec king")

 console.log("===========")
 //below is a function with parameters to calculate the sum of two numbers
  function addition(number1,number2){
    sum= number1 + number2;
    console.log("the sum of numbers is;",sum)
  }

  addition(45,60)
  addition(90,50)
  console.log("============")

  //by use of a function that accepts parameters,calculate area of a triangle whose base is 20cm and height is 12cm

  function area(base,height){
    result=base*height/2;
    console.log("the area is",result,"cm²")
  }
  area(20, 12)
  area(7,24)

  console.log("============")
  //find the simple interest given the principle as 50000,rate as 5% and time as 8 years

  function interest(principle,rate,time){
    result=principle * rate * time/100;
    console.log("the simple interest is",result)
  }
  interest(50000,5,8)