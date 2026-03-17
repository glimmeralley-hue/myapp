import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    // initialize hooks
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    // define the three application states
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // below is the function that handles the submit action
    const handleSubmit = async (e) => {
        // below we prevent our site from reloading 
        e.preventDefault();

        // reset states
        setError("");
        setSuccess("");
        setLoading("hang on, we're cooking up something sweet...");

        try {
            // create a form data object to capture the four form details
            const formdata = new FormData();
            formdata.append("username", username);
            formdata.append("email", email);
            formdata.append("password", password);
            formdata.append("phone", phone);

            // using axios to access the POST method
            const response = await axios.post("https://glimmer.alwaysdata.net/api/signup", formdata);

            // set back loading to default
            setLoading("");

            // update the success hook with the server message
            setSuccess(response.data.message);

            // clear your hooks
            setUsername("");
            setEmail("");
            setPassword("");
            setPhone("");
        } catch (error) {
            setLoading("");
            // update error hook with message
            setError(error.message);
        }
    };

    return (
        <div className='row justify-content-center mt-4'>
            <div className="card col-md-6 shadow p-4">
                <h1 className="text-primary fw-bolder">Sign up</h1>
                
                {/* Status Messages */}
                {loading && <h5 className="text-info">{loading}</h5>}
                {success && <h3 className="text-success">{success}</h3>}
                {error && <h4 className="text-danger">{error}</h4>}

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Enter your username" 
                        className="form-control mb-3" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required />

                    <input type="email" 
                        placeholder="Enter your email address"
                        className="form-control mb-3" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required />

                    <input type="password" 
                        placeholder="Enter your password"
                        className="form-control mb-3" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required />
                    
                    <input type="number" 
                        placeholder="Enter your mobile phone number"
                        className="form-control mb-3"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        required />

                    <input type="submit" 
                        value={loading ? "Registering..." : "sign up"}
                        className="btn btn-primary fw-bolder w-100" 
                        disabled={loading} />

                    <p className="mt-4 text-center text-uppercase">
                        Already have an account? <Link className="text-decoration-none fw-bold" to={'/Signin'}>sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
