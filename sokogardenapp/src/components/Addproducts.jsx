import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
const Addproducts= () =>{
//introduce hooks(1)

    const [product_name,setProductname] = useState("");
    const[product_description,setProductdescription]= useState("");
    const[product_cost,setProductcost]= useState("");
    const [product_photo,setProductphoto]= useState("");


    //set hooks for app states (2)

    const[ loading,setLoading]= useState(false);
    const[success,setSuccess]=  useState("");
    const[error,setError] = useState("");

    

   

    //create a function to handle submit -asynchronous arrow function(3)

    const handleSubmit = async(e)=>{
        //prevent the site from reloading  so that details entered are not  removed(4)
        e.preventDefault();
         
        //set loading hook with a message(activate it) (5)
        setLoading(true)

        //append the details (8)

        try{
 const formdata = new FormData();
            formdata.append("product_name",product_name);
            formdata.append("product_description", product_description)
            formdata.append("product_cost",product_cost);
            formdata.append("product_photo",product_photo)
            //interact with the axios to help you use the method POST

            const response = await axios.post("https://glimmer.alwaysdata.net/api/add_product", formdata);

            //set loading hook back to default

            setLoading(false);
            
            // update the success hook with a message

          setSuccess(response.data.message)

          //clearing the hooks-setting them to default
          setProductname("");
          setProductdescription("");
          setProductcost("");
          setProductphoto("");

        e.target.reset()

          setTimeout(() => {
        setSuccess("");
      }, 5000);
            } 
 
            catch(error){
                //set loading hook back to default
 setLoading(false);

 //update the setError with a message
 setError(error.message)
           
        }
    }
    return(
        <div  className="row justify-content-center mt-4 ">
            <div className="col-md-6 p-4 card shadow">
<h3>welcome to add product</h3>

 {/* bind the loading  hook (7) */}
 
{loading && <Loader/>}

                {success && <h3 className="text-success">{success}</h3>}
                {error && <h4 className="text-danger">{error}</h4>}
 
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

{/* {product_description} */}
 <br />

<input type="number"
placeholder="enter product price"
className="form-control"
required
value={product_cost}
onChange={(e) =>setProductcost(e.target.value)}/> <br />

{/* {product_cost} */}

{/* {product_cost} */}

<label className="text-primary">product photo</label>
<input type="file"
className="form-control"
required
accept="/*"
onChange={(e) =>setProductphoto(e.target.files[0])}/> <br />


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