import React,{ useState } from "react"

const Ex1=()=>{
    const[res,setRes]=useState("");
    const Login=(p1,p2)=>{
        p1=="samar" && p2=="sa@123"?setRes("Login Success"):setRes("Login Fail")
    }
    return(
        <>
        <div style={{textAlign:"center"}}>
        <button onClick={()=>Login("samar","sa@123")}  className="btn btn-outline-success">Login</button>
        <h2>{res}</h2>
        </div>
        </>
    )
}
export default Ex1