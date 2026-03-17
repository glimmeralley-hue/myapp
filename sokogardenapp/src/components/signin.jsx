import axios from "axios";
import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    //below we have the useNavigate hook to redirect us to another page on success

    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        // FIXED: Corrected typo from e.prevent.Default() to e.preventDefault()
        e.preventDefault();

        // Clear previous messages
        setError("");
        setSuccess("");
        setLoading("calling yo damn uberrrr...");

        try {
            const formdata = new FormData();
            formdata.append("email", email);
            formdata.append("password", password);

            const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/signin", formdata);
            
            setLoading("");

            // Check if the server actually returned success data
            if (response.data) {
               //if succesful,let a person ghet redirected to another page\
               navigate("/");
            } else {
                setError("credentials are incorrect");
            }
        } catch (error) {
            setLoading("");
            // Capture specific server error if available, else generic error
            const serverMsg = error.response?.data?.message || "oops, try again";
            setError(serverMsg);
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h1 className="text-primary">sign in</h1>
                
                {/* Feedback status messages */}
                {loading && <h5 className="text-info">{loading}</h5>}
                {success && <h3 className="text-success">{success}</h3>}
                {error && <h4 className="text-danger">{error}</h4>}

                <form onSubmit={handlesubmit}>
                    <input 
                        type="email"
                        placeholder="enter your email"
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    /> 
                    <br />

                    <input 
                        type="password"
                        placeholder="enter your password"
                        className="form-control" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    /> 
                    <br />
                    
                    <input 
                        type="submit" 
                        value={loading ? "Verifying..." : "sign in"}
                        className="btn btn-primary w-100"
                        disabled={loading}
                    /> <br /> <br />

                     Don't have an account? <Link className="text-decoration-none fw-bold" to={'/Signup'}>register</Link>
                </form>
            </div>
        </div>
    );
};

export default Signin;

//how to store user details in local storage under navigate("/")