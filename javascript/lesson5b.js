// arrow functions with parameters


const greet = (name) =>{
    console.log("hello "  +   name  +  " how have you been king?")
}

greet("James");
greet("Aisha");
greet("malec")

//example 2
console.log("------------")
//below is a function to find the radius of a circle

const Circlearea = (radius)=>{
    const pi=3.142
    let area = pi * radius * radius
    console.log("the area of the circle is " + area + "cm\u00B2")

}
Circlearea(7)
Circlearea(21)


//come up with an example of an arrow function that utilizes three parameters
const volume = (length, width, height) => {
    let vol=length * width * height
    console.log("the volume is " + vol + "cm\u00B3")
}

volume(5, 10, 8);
volume(10,20,29);