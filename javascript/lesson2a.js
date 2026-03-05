// objects data type :
// an object in javascript is a data type that stores data in the form of key value pairs

let person = {
    name: " allen glimmer",
    age:70,
    isRegistered: true

};
console.log("the details of the person is",person)

// first method is by use of square brackets 
console.log(person["age"])

//second method is by use of a dot
console.log(person.name)

// check the data type
console.log(typeof(person))

c

//array data type
//this refers to a collection of items that are on indexes
let fruits= ["mango","pineapple","apple","banana","melon","lemon","grapes"]

console.log("the entire array of fruits is",fruits)

// to access the items of an array we use indexes
console.log(fruits[3])

// you can slice items of an array
console.log(fruits.slice(2,5))