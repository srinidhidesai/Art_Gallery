import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function Review() {
    const [fname, setfname] = useState("");
    const [mail, setmail] = useState("");
    const [review, setreview] = useState("");
    
    return (
        <div className="signUpWapper">
        <div className="signup-container">
            <h1>Help us in improving</h1>
            <label>Enter Full Name</label>
            <input
                type="text"
                placeholder="Enter your full name"
                onChange={(e) => {
                    setfname(e.target.value);
                }}
            />
            <label>Enter Email</label>
            <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) => {
                    setmail(e.target.value);
                }}
            />
            <label>Give review</label>
            <input
                type="text"
                placeholder="min 10 char-max 100 char"
                onChange={(e) => {
                    setreview(e.target.value);
                }}
            />
            <label>Rate Us</label>
            <input
                type="number"
                placeholder="5 for best-1 for worst"
                onChange={(e) => {
                    setreview(e.target.value);
                }}
            /> <br /><br/>

            <button
                onClick={() => {
                    axios.post("http://localhost:9000/Review", {fname:fname, mail:mail, review:review}).then(
                        (res)=>{
                          alert(res.data.message)
                        }
                      ).catch()
                }}
            >
                Subit Review
            </button>
        </div>
        </div>
    );
}

export default Review;


