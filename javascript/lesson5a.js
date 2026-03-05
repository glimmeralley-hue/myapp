//arrow functions
//this is a funcvtion that was introduced in the ECMA Script 6 and they gave us a modern way of defining functions in a compact manner.

//at times,the arrow functions can be said to be anonymous...since they use the names of the variables they are contained in
const sayHello = () => {
    console.log("this is an arrow function")
}


sayHello();

//console.log("=====================")
//create an arrow function that is able to find the product of three numbers
const product = (a, b, c) => {
    return a * b * c;
}

console.log(product(2, 3, 4));