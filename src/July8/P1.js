import React, { useState } from "react";
import P2 from "./P2";
const P1 =()=>{
    const[state,setState]=useState(
       {
        student:{
            name:"samar",
            age:23,
            course:"java"
        }
       }
      
    )
    const num=10;
    return(
        <>
        <h1>I Am From P1</h1>
        <p>{state.student.name}</p>
        <p>{state.student.age}</p>
        <p>{state.student.course}</p>
        <P2 name={state.student.name} num={num}></P2>
        </>
    )
}
export default P1