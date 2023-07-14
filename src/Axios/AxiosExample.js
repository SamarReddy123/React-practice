import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const url="https://jsonplaceholder.typicode.com/users";
const AxiosEx=()=>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get(url).then(response=>setData(response.data))
    },[])
    return(
        <>
        <h1>Welcome to axios</h1>
        
           <ul>{
             data.map(x=><ul key={x.id}>
                <li>{x.name}</li>
                {x.email}
             </ul>)
           }
           </ul>

        </>
    )
}
export default AxiosEx