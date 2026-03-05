// an array is like a shelf in a warehouse ,everything lined up in a specific order
//each item has a seat number called an index

//declaring an array
let brands = ["samsung","iphone","oppo","techno"];
// accessing items
let firstitem = brands[0];
//results in  "samsung"
let thirditem = brands[2];
// results in "oppo"
console.log(firstitem)
console.log(thirditem)
console.log(typeof(brands))


//an object is like a patient's medical file.It doesn't care about order,it uses keys/labels to describe a specific thing

//declaring an object
let smartphone = {
    model: 'galaxy S24',
    price:'120000',
    color:"titanium"


};
//accessing items;two ways
//1. dot notation
console.log(smartphone.model)
//results in galaxy S24

//2.bracket notation(good for variables)
console.log(smartphone["price"]);
//results in