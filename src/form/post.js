import React, { useState } from "react";
import './post.css'
import {  Link } from "react-router-dom";
import axios from "axios";
function Post(){
    const[data,setdata]=useState({ image:"",auther:"",location:"",description:""})
    // console.log(data)
    // const[val,setval]=useState('')
    // console.log(val)
    const config ={
        headers: {
          "content-type": "multipart/form-data"
        }
      }

    const handleClick=async()=>{
    
        const newPost={
          image:data.image,
          auther:data.auther,
            location:data.location,
            description:data.description
        }
        console.log(newPost.image)
  
   const  val=await  axios.post("http://localhost:8080/add/user", newPost, config)
          console.log(val)
          
  }

    return(
        <div id="card">
             <section>
               <div className="ip">
                <input type='file' placeholder="No file chose" onChange={(e)=>{
            setdata({...data,image:e.target.files[0]})}}   ></input>
               </div>
            </section>
            <section>
                <div><label>
                    Name
                </label>
               <div> <input onChange={(e)=>{setdata({...data,auther:e.target.value})}}></input></div>
                </div>
            </section>
            <section>
                <div><label>
                    location
                </label>
               <div> <input  onChange={(e)=>{setdata({...data,location:e.target.value})}}></input></div>
                </div>
            </section>
            <section>
                <div><label>
                    discription
                </label>
               <div> <input onChange={(e)=>{setdata({...data,description:e.target.value})}}></input></div>
                </div>
            </section>
            <section><Link to='/post'><button onClick={handleClick} type="submit">post</button></Link></section>
        </div>
    )
}
export default Post