import { useState } from "react";

const Sixthcomponent=()=>{
    const[weight,setWeight]=useState(50);

    return(
        <div className="Sixthcomponent">
            <h5>Current weight:{weight}kg</h5>
            <button onClick={()=>setWeight(55)}>UPDATE WEIGHT</button>

        </div>
    );
};

export default Sixthcomponent;