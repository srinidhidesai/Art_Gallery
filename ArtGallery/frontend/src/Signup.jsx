import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function Signup() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phon, setphon] = useState("");
    const [address, setaddress] = useState("");
    const [password,setpassword]= useState("");
    return (
        <div className="signUpWapper">
        <div className="signup-container">
            <h1>Art Gallery Sign Up</h1>
            <label>Enter Full Name</label>
            <input
                type="text"
                placeholder="Enter your full name"
                onChange={(e) => {
                    setname(e.target.value);
                }}
            />
            <label>Enter Email</label>
            <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) => {
                    setemail(e.target.value);
                }}
            />
            <label>Enter Phone Number</label>
            <input
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) => {
                    setphon(e.target.value);
                }}
            />
            <label>Enter Address</label>
            <input
                type="text"
                placeholder="Enter your full address"
                onChange={(e) => {
                    setaddress(e.target.value);
                }}
            />
            <label>Set password</label>
            <input
                type="text"
                placeholder="Minimun 5 character"
                onChange={(e) => {
                    setpassword(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    axios.post("http://localhost:9000/signup", {name:name, email:email, phon:phon,address:address,password:password}).then(
                        (res)=>{
                          alert(res.data.message)
                        }
                      ).catch()
                }}
            >
                Save
            </button>
        </div>
        </div>
    );
}

export default Signup;


