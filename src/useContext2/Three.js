import React, { useContext } from "react";
import  {Ucontext}  from "./FirstProvider";
const Three=()=>{
    const user=useContext(Ucontext)
   let {hi,age,course} =user
    return(
        <>
        <center>
        <h1>I AM From Three</h1>
        <div style={{backgroundColor:"pink",width:"30%"}}>
            <p>{hi}</p>
            <p>{age}</p>
            <p>{course}</p>
            </div>
            </center>
        </>
    )
}
export default Three;