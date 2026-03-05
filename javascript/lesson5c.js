//exporting modules
//we export modules so that we utilize them in other files/modules in our programme

export const calculator = (x, y) => {
    let difference = x - y;
    console.log("the difference is ,", difference);
}

export const interest = (principle, rate, time) => {
    let si = (principle * rate * time) / 100;
    console.log("the simple interest is ,", si);
}

export const bmi = (weight, height) => {
    let bmiValue = weight / (height ** 2); 
    console.log("the BMI is ,", bmiValue);
}

