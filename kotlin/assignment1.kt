fun main(){
    // Addition program
    val num1 = 5
    val num2 = 15
    val sum = num1 + num2

    println("The sum of $num1 and $num2 is $sum")

    // Subtraction program 
    val num3 = 20
    val num4 = 9
    val difference = num3 - num4

    println("The difference between $num3 and $num4 is $difference")



    // Conditional statement in Kotlin
    val age = 18
    if (age >=18) {
        println("You are an adult.")
    } else {
        println("You are a minor.")
    }

    // using when statement to show range
    val score = 85
    when (score) {
        in 90..100 -> println("Excellent")
        in 80..89 -> println("Good")
        in 70..79 -> println("Average")
        in 50..69 -> println("Needs Improvement")
        in 0..49 -> println("Failed")
        else -> println("Invalid Score")
    }
}

// if / else --> Simple true/false checks 
// if expression --> returns a value based on the condition
// when statement --> multiple possible values
// when expression --> returns a value based on multiple conditions
// when statement with range --> checks if a value falls within a specified range