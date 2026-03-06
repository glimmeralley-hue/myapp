import { useState } from "react";

const Fifthcomponent=()=>{


const[number,setNumber]=useState(10)

    //the use.state() hook enablres us to create dynamic websites 
return(
        <div className="Fifthcomponent">
            {/* below we bind our value for no. */}

            <h1>welcome to the fifth component</h1>
            <h2>current number is{number}</h2>
            {/* call the setNumber function to update the number after click effect */}

            <button onClick={()=>setNumber(50)}> click to update the number</button>
        </div>
    )
}
export default Fifthcomponent;