import React, { useState } from "react";
const NamesAdd=()=>{
    const[list,setList]=useState([]);
    const[state,setState]=useState("");
    const changename=(e)=>{
         let name=e.target.value;
         setState(name)
    }
    const add=()=>{
        setList(list=>[...list,state])
        setState("");
    }
    return(
        <>
        <h1>Student List : </h1>
        <input value={state} onChange={changename} className="form-control"></input>
        <input type="submit" value={"Add"} onClick={add} className="btn btn-success"></input>
        <ul>
            {
                list.map(n=><li key={n}>{n}</li>)
            }
        </ul>
        </>
    )
    }
    export default NamesAdd