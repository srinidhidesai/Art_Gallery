import React ,{useState} from 'react'
import './App.css';
import axios from 'axios';

function Sell() {
    const [lname, setlname] = useState("");
    const [pho, setpho] = useState("");
    const [file, setfile] = useState("");
    const [date, setdate] = useState("");
    const [number, setnumber] = useState("");
    return (
        <div className='sell1'>
        <div className="signup-container">
            <h1>Sell your art to us</h1>
            <label>Artist Name</label>
            <input type="text"  onChange={(e) => {
                    setlname(e.target.value);
                }} /><br/><br/>
                <label>Phone number</label>
            <input type="text"  onChange={(e) => {
                    setpho(e.target.value);
                }}/><br/><br/>
            <label>Upload clear picture of your art</label>
            <input type="file"  onChange={(e) => {
                    setfile(e.target.value);
                }} required/><br/><br/>
            <label>Select date for pickup</label>
            <input type="date" onChange={(e) => {
                    setdate(e.target.value);
                }}/><br/><br/>
            <label>Expected price range</label>
            <input type="number"  onChange={(e) => {
                    setnumber(e.target.value);
                }}/><br/>
            <p>Note:Art will be accpected only if its without damage and final price will be decide by us</p><br/><br/>
            <button onClick={() => {
                    axios.post("http://localhost:9000/sell", {lname:lname,pho:pho,file:file,date:date,number:number}).then(
                        (res)=>{
                          alert(res.data.message)
                        }
                      ).catch()
                }}>Save</button>
           
        </div>
        </div>
    );
}

export default Sell
