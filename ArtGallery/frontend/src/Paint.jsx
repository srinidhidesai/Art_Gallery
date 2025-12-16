
import React ,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { samplepaint } from './sampledata';


function Paint() {
    const [paint, setpaint]=useState(samplepaint);
    console.log("var paint", paint)
     const navigateTo=useNavigate();
    return (
        <div>
            <h1>Paintings</h1>
            {/* <a  href='#test' className='viewAll'
            onClick={()=>{
                axios.gt("https://github.com/harvardartmuseums/api-docs").then(
                    (res)=>{
                        console.log("api data",res?.data)
                        setpaint(res?.data);
                    }
                ).catch();
            }}>view..</a> */}
            <div className='Wrapper'>

            {
                paint?.map((ele)=>{
                    return(
                        <div className='card'>
                            <p>{ele?.title}</p>
                            <img src={ele?.image} width={150} height={170} alt='paint'/>
                            <p>details:{ele?.description.slice(0,60)}</p>
                            <p>price:{ele?.price}</p>
                            <p className='viewDetails' onClick={()=>{
                                navigateTo("/products",{state:ele})
                            }} > Know me more</p>
                            </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default Paint
