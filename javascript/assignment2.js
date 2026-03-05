let distance = 550; // You can change this number to test different tiers
let amountToPay;

if (distance >= 0 && distance <= 100) {
    amountToPay = 5;
} else if (distance >= 101 && distance <= 500) {
    amountToPay = 10;
} else if (distance >= 501 && distance <= 1000) {
    amountToPay = 20;
} else if (distance >= 1001) {
    amountToPay = 40;
} else {
    console.log("Invalid distance entered.");
}

console.log("Your total is: " ,amountToPay ," USD");

//triple equal sign-research
//terms, === (Triple Equal) is a "strict" check. It only says True if the value and the type (Number vs. String) are exactly the same.

let price = 100;      // This is a Number
let input = "100";    // This is a String (text)

console.log(price == input);  // Returns: True  (Lazy check)
console.log(price === input); // Returns: False (Strict check - Types don't match)

//  what is the difference between a dictionary in python,an object in javascript and a json data when dealing with APIs

//A Python Dictionary and JavaScript Object are "live" containers used inside their respective languages to hold and change data while the program is running. JSON is not a container, but a text-only format (a string) used to ship that data across the internet between the two.
