import React, { useEffect, useState } from "react";
const Ex1=()=>{
    const[num,setNum]=useState(0);
    const[toggle,setToggle]=useState(true)
    const[pageWidth,setPageWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const handler=()=>{
            setPageWidth(window.innerWidth);
        }
        window.addEventListener("resize",handler);
        console.log("samarreddy"+num);
        return ()=>{
           console.log("i am removing")
           window.removeEventListener("resize",handler)
        }
    })
    return(
        <>
        <h1>useEffect Example</h1>
        
        <h2 onClick={()=>setToggle(!toggle)}>{toggle ? "open" : "close"}</h2>
        <h2>{pageWidth}</h2>
        <h2>{num}</h2>
        <button onClick={()=>{setNum(num+1)}} className="btn btn-success">Add</button>
        </>
    );
}
export default Ex1;