import React, { useState } from 'react';
import Subchild2 from './Subchild2';
const Subchild=(props)=>{
    const[str,setStr]=useState("Kiran");
    return(
        <>
        <h1>I am from Subchild</h1>
     <h3 style={{color:"yellow"}}> Name : {props.name}</h3>
      <h3 style={{color:"skyblue"}}> Number : {props.num}</h3>
      <h3 style={{color:"blue"}}>Childern : {props.children}</h3> 
      <Subchild2 {...props} str={str}></Subchild2>
        </>
    )
}
export default Subchild;