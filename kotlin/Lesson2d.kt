fun main() {
    val marks :Double =100

    if (marks in 31..50){
        println("average")

     }
     else if (marks in 51..70) {
        println("above average")

     }
     else if (marks in 0..30){
        println("fail")
     }
     else if ( marks in 71..100){
        println("pass")
     }
     else{
        println("invalid score")
     }
    
}

