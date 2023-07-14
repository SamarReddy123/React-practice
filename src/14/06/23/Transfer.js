import React, { useState } from "react";
import Child from "./Child";
const Parent=()=>{
    const [arr,setArr]=useState([10,20,30,40,50]);
    const arr1=["simha","ajay","kiran"]
    const obj={
        name:"samar",
        age:23
    }
    return(
        <>
        <h1>Parent component</h1>
        <Child arr={arr} obj={obj} arr1={arr1}/>
        </>
    )
}
export default Parent