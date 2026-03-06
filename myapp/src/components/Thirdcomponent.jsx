const Thirdcomponent=()=>{
    // Variable enables us to create dynamic websites. (It means the contents of the website will be changing over time.)
    // Below we declare some varibles. Note: variables are usually declared just before the return statement in Reactjs.
    let name= "glimmer"
    let age=52;
    let message="freaking programming"
    return(
        <div className="Thirdcomponent">

            <h1>welcome to 3rd component</h1>
            {/* belowe we bind the variables using names pre-declared */}
            <h5>My name is:{name}</h5>
            <h5>BUT{message}</h5>
        </div>
    )
}
export default Thirdcomponent;