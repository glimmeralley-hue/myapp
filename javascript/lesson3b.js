// while loop
// Below is a simple syntax of the while loop
// 1. initialization of a variable
// 2. while keyword
// 3. condition to be checked
// 4. body of the while loop
// 5. increment/decrement of the variable

let i = 0
while(i <= 10){
    console.log("The new value of i is: ", i)
    i++
}

console.log("======================")
// mapping an array
let numbers = [1,2,3,4,5];
let doubled = numbers.map(num => num * 2);
console.log(doubled)


const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]
