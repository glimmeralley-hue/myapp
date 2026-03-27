// fun main() {
//     //for loop
//     //used to execute a block of code/statement a number of times until a condition is met
    

//     for (number in 1..30){
//         println("The count is : $number")
//     }

//     println("===========================")

//     //create a for loop to print 50-65

//     for (digit in 50..65){
//         println(" the count is : $digit")
//     }

//     for (x in 20 .. 30 ){
//         if (x % 2 != 0){
//             println(x)
//         }
//     }
//        for (i in 1..5) {
//         val prod = i * 5
//         println("5 * $i = $prod")
//     };

    // create a program that is able to find the factorial of number 5
   fun main() {
    
    val number=5
     var factorial=1
     for (i in 1.. number) {
       factorial *= i
           
     }
     println("factorial of $number is $factorial" )
   
    }