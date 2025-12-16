import React from 'react'
// import logo from './logo.jpg'
import './App.css';
import art from "./assets/ART_GALLARY-removebg-preview.png";
import { useNavigate } from 'react-router-dom';


function Welcome() {
    const navigateTo=useNavigate();
    return (
        <div className='logo'>
            <img src="https://i.pinimg.com/736x/85/4b/c5/854bc5cdeb2b99a09a33409abe4f7d6c.jpg" className='poster'/>
            <img src={art} className='poster1'/>
            {/* <button className='know'  onClick={()=>{
                navigateTo("/Signup")
            }}>Know our Artists</button> */}
            {/* <h1 className="main-heading">Art Gallery</h1>
                <p className="subtitle">Connecting art collectors with timeless masterpieces</p> */}
            <div className='countWrapper'>
            <div className="showCount">
                <h1 className='highlightCount'>23500</h1>
                <p>Happy Customers</p>
            </div>

            <div className="showCount">
                <h1 className='highlightCount'>7000+</h1>
                <p>Art Works</p>
            </div>
            <div className="showCount">
                <h1 className='highlightCount'>5000+</h1>
                <p>Customer ReAcquisition</p>
            </div>

        </div>+-
                
            

        </div>
    )
}

export default Welcome
