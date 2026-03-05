//anonymous functions in javascript
//these are functions that exist without a name
//below is an example
//the below function shall take take the name of the variable they are comtained  in.
 const greet = function(){
    console.log("hello there,hope your Monday is fine. . .")
 }
 greet();
  //below is another

  (function()
{
    console.log("welcome to the world of programming")
})();

//Arrow Functions
//​Explanation: A shorter, modern way to write functions using the => symbol that doesn't create its own "this" context.
//​Example:
const meow = () => console.log("Meow!"); 

//Modules
//​Explanation: A system that lets you split your code into separate files so you can "export" logic from one and "import" it into another, keeping things organized and secure.
​//example
// file: logic.js
export const jump = () => console.log("Jumping!");

// file: app.js
import { jump } from './logic.js';
jump();

