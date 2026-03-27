fun main() {
    //functions  with parameters
    
    fun greeting (name: String) {
        println("hello $name,have a good day")
    }

    //when invoked,pass the name as an argument

    greeting("james")
    greeting("allen")

    //example of  a function used to calculate BMI

    fun BMI ( weight : Double, height : Double){
        val answer = weight / (height * height)


        println("The bmi is : "+ answer)
    }
    
    BMI( 67.9, 1.83)
    BMI( 67.0, 1.85)

    //create  a function that accepts parameters and checks whethera given number is odd or even

    fun checker( number: Int){
        if (number % 2 == 0){
            println("even number")
        }
        else{
            println("odd number")
        }
    }

  checker(7)
  checker(4)
    
}