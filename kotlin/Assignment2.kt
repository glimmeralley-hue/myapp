// Program 2: Check if a number is Odd or Even

fun main() {
    val number = 15  // Change this value to test different numbers
    
    if (number % 2 == 0) {
        println("$number is EVEN")
    } else {
        println("$number is ODD")
    }
    
    // Test multiple numbers
    println("\nTesting multiple numbers:")
    val numbers = arrayOf(10, 15, 22, 7, 0, -5, 100, 99)
    for (num in numbers) {
        if (num % 2 == 0) {
            println("$num is EVEN")
        } else {
            println("$num is ODD")
        }
    }
}

// Program 1: Leap Year Checker using if statements

fun main() {
    val year = 2024  // Change this value to test different years
    
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                println("$year is a LEAP year")
            } else {
                println("$year is NOT a leap year")
            }
        } else {
            println("$year is a LEAP year")
        }
    } else {
        println("$year is NOT a leap year")
    }
    
    // Test multiple years
    println("\nTesting multiple years:")
    val years = arrayOf(2000, 2020, 2024, 1900, 2023, 2100)
    for (y in years) {
        val result = if (y % 4 == 0) {
            if (y % 100 == 0) {
                if (y % 400 == 0) "LEAP year" else "NOT a leap year"
            } else {
                "LEAP year"
            }
        } else {
            "NOT a leap year"
        }
        println("$y is $result")
    }
}