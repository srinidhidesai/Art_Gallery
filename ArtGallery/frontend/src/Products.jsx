import React from 'react'
import{ useLocation } from 'react-router-dom'
import axios from 'axios'
import "./App.css"

function Products() {
    const data = useLocation();
    console.log("data",data);
    return (
        
        <div>
            <p>Product Name: { data.state.title } </p>
            <p>Price : {data.state.price}</p>
            <img src={data.state.image} alt="" width={200} height={200} />
            <p>Description: {data.state.description}</p>
            <p>Ratings: {data.state.rating.rate}</p>
            <p>Reviewed By: {data.state.rating.count}</p>
            <button className='cartbutton' onClick={()=>{
                axios.post("http://localhost:9000/placeorder", data.state).then(
                  (res)=>{
                    alert(res.data)
                  }
                ).catch((exe)=>{console.log(exe)})

            }} >Place Order</button>
            <p>Note:only cash on delivery</p>
        </div>
    );
}

export default Products
