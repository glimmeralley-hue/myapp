fun main() {
    // Assignment 1: Create a while loop to print from -20 to +20
    println("Assignment 1: Numbers from -20 to +20")
    var number = -20
    while (number <= 20) {
        println(number)
        number++
    }
    
    println("\n" + "=".repeat(40) + "\n")
    
    // Assignment 2: Create a while loop to print all EVEN years from 2000 to 2025
    println("Assignment 2: Even years from 2000 to 2025")
    var year = 2000
    while (year <= 2025) {
        if (year % 2 == 0) {
            println(year)
        }
        year++
    }
    
    println("\n" + "=".repeat(40) + "\n")
    
    // Create an array of 7 counties and loop through using for loop
    println("Assignment: Array of 7 counties")
    val counties = arrayOf("Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Thika", "Kitale")
    
    for (county in counties) {
        println(county)
        println(county[1])
    }
    
    println("\n" + "=".repeat(40) + "\n")
    
    // Functions without parameters in Kotlin
    println("Functions without parameters:")
    greetUser()
    printCurrentTime()
    getRandomNumber()
}

// Function without parameters - displays a greeting message
fun greetUser() {
    println("Hello! Welcome to Kotlin programming!")
}

// Function without parameters - displays current system info
fun printCurrentTime() {
    println("Current system time: ${System.currentTimeMillis()}")
}

// Function without parameters - generates and returns a random number
fun getRandomNumber() {
    val randomNum = (1..100).random()
    println("Random number between 1 and 100: $randomNum")
}