//when Statement The when statement in Kotlin is like a switch case in other languages. It checks a value against multiple conditions and executes the matching block.
fun main() {
    val marks = 70

    when (marks){

        in 1..30 -> println("you failed")
        in 31..50 -> println("average")
        in 51..70 ->println("above average")
        in 71..100 ->println("you passed")
        else-> println("invalid scores")
    }

    
}