import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const URL="https://jsonplaceholder.typicode.com/users";
const FetchEx=()=>{
    const[data,setData]=useState([]);
    const datafetching= async (url)=>{
           const response= await fetch(url);
           const data= await response.json();
           setData(data)
    }
    useEffect(()=>{
        datafetching(URL);
    },[])
    return(
        <>
        <h1>Welcome to fetch</h1>
        <ul>
        {
            data.map((x)=><ul key={x.id}>
                <li>
                    {x.name}
                </li>
                {x.email}
            </ul>)
        }
        </ul>
        </>
    )
}
export default FetchEx;