fun main() {
    val points = 400
    if (points >=0 && points <=100){
        println("you do not qualify")

    }
    else if (points >=101 && points <=400){
        println("you win a smartphone")
    }

    else if (points >=401 && points <=1000){
        println("You win a laptop")
    }
    else if(points > 1000){
        println("You win a trip to canada")
    }
    



    
}