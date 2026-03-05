// Variable to store the Gross Income (Ksh)
let grossIncome = 35000; 
let monthlyContribution;

// NHIF Premium Rate Logic
if (grossIncome < 6000) {
    monthlyContribution = 150;
} else if (grossIncome <= 7999) {
    monthlyContribution = 300;
} else if (grossIncome <= 11999) {
    monthlyContribution = 400;
} else if (grossIncome <= 14999) {
    monthlyContribution = 500;
} else if (grossIncome <= 19999) {
    monthlyContribution = 600;
} else if (grossIncome <= 24999) {
    monthlyContribution = 750;
} else if (grossIncome <= 29999) {
    monthlyContribution = 850;
} else if (grossIncome <= 49999) {
    monthlyContribution = 1000;
} else if (grossIncome <= 99999) {
    monthlyContribution = 1500;
} else {
    monthlyContribution = 2000; // For income Over 100,000
}

console.log("For a Gross Income of Ksh", grossIncome, "the Monthly Contribution is Ksh", monthlyContribution);


// Start at 2000, end at 2026
for (let year = 2000; year <= 2026; year++) {
    if (year % 4 === 0) {
        console.log(year + " is a leap year");
    }
}

// Task 1: Print All Odd Numbers from 1 to 19
for (let i = 1; i <= 19; i += 2){
    console.log(i);
}

console.log("----------------------")

// Task 2: Countdown from 10 to 1
for (let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("======================")

// Task 3: Find the Largest Number in an Array
const numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log("largest number is:", largest)

console.log("----------------------")

// Task 4: Multiplication Table of 5
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

console.log("======================")

// Research on arrow functions with parameters and anonymous functions in javascript
// Regular vs Arrow Function
// Regular
function add(a, b){return a + b;}
// Arrow
const addArrow = (a, b) => a + b;

// Arrow Functions with Parameters
// single parameters; arrow function;
const square = x => x * x;
console.log(square(5));

console.log("----------------------")

// multiple parameters; regular function;
function multiply(a, b){ return a * b; }
console.log(multiply(3, 4));

console.log("----------------------")
console.log("======================")

// Anonymous functions
// assign to a variable
const greet = function(name){
    return `Hello, ${name}!`;
};
console.log(greet("Cedric"));

console.log("----------------------")

// pass it as a callback
setTimeout(function(){
    console.log("2 seconds later...");
}, 2000);



