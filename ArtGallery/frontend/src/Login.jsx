import React ,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Login=()=> {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigateTo= useNavigate();
     const handelLogin=async(e)=>{
        if(email.length===0 || password.length===0)
        {
            alert("please enter email Id and password ")
        }
        e.preventDefault();
        const response=await axios.post("http://localhost:9000/login",{email,password});
        if(response?.data?.message==="User account exists")
            {
              navigateTo("/Welcome")
            }
            else{
                alert(response?.data?.message)
            }
     }
    return (
        <div >
        <form onSubmit={handelLogin} className='signup-container'>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
            <button type="submit">Login</button>
        </form>
        </div>
            
    )
}

export default Login