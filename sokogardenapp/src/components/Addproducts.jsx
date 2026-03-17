import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addproducts= () =>{
//introduce hooks

    const [product_name,setProductname] = useState("");
    const[product_description,setProductdescription]= useState("");
    const[product_cost,setProductcost]= useState("");
    const [product_photo,setProductphoto]= useState("");


    //set hooks for app states

    const[ loading,setLoading]= useState(false);
    const[success,setSuccess]=  useState("");
    const[error,setError] = useState("");

     //below we have the useNavigate hook to redirect us to another page on success

   

    //create a function to handle submit

    const handleSubmit = async(e)=>{
        //prevent the site from reloading
        e.preventDefault();
         
        //set loading hook wirth a message(activate it)
        setLoading(true)

        try{
 const formdata = new FormData();
            formdata.append("product_name",product_name);
            formdata.append("product_description", product_description)
            formdata.append("product_cost",product_cost);
            formdata.append("product_photo",product_photo)

            const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/addproducts", formdata);

            setLoading("");
              // Check if the server actually returned success data
            if (response.data) {
               //if succesful,let a person get redirected to another page\
              
            } else {
                setError("credentials are incorrect");
            }
            

        }

        catch(error){
 setLoading("");
            // Capture specific server error if available, else generic error
            const serverMsg = error.response?.data?.message || "oops, try again";
            setError(serverMsg);
        }
    }
    return(
        <div  className="row justify-content-center mt-4 ">
            <div className="col-md-6 p-4 card shadow">
<h3>welcome to add product</h3>

{/* bind the loading  hook */}
{loading && <Loader/>}
  <form onSubmit={handleSubmit}>

<input type="text"
placeholder="enter product name" 
className="form-control"
required
value={product_name}
onChange={(e)=>setProductname(e.target.value)} />
 <br />

<input type="text"
placeholder="enter product description" 
className="form-control"
required
value={product_description}
onChange={(e)=>setProductdescription(e.target.value)} />
 <br />

<input type="number"
placeholder="enter product price"
className="form-control"
required
value={product_cost}
onChange={(e) =>setProductcost(e.target.value)}/> <br />

{/* {product_cost} */}

<label className="text-primary">product photo</label>
<input type="file"
className="form-control"
required
accept="image/*"
onChange={(e) => setProductphoto(e.target.files[0])}/> <br />


<input type="submit"
value="add product"
className="btn btn-outline-primary" 
required/>
</form>
            </div>


        </div>
    )
    
}

export default Addproducts;