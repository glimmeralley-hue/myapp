fun main() {
    val counties = arrayOf("Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Machakos", "Kiambu")
    
    for (county in counties) {
        if (county == "Nairobi" || county == "Kisumu") {
            print("$county ") 
        }
    }
}
