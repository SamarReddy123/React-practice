import React, { useState } from "react";
let Number1=(props)=>{
    const[count,setCount]=useState(10)
    
    //  let changeInput=(event)=>{
    //      setCount(event.target.value)
    //  }
     let Adding=()=>{
        setCount(count+5)
     }
     let Delete=()=>{
        setCount(count-5)
     }
    return(
        <div>
            <h1>claculator</h1>
            <input  type="number"  value={count}></input><br></br>
           <button onClick={Adding}>Add</button>
           <button onClick={Delete}>Delete</button>
        </div>
    );
}
export default Number1