import React, { useState } from "react";
const P2 =(props)=>{
    const[con,setCon]=useState(props.num);
    const add=()=>{
        setCon(con+5)
    }
    const sub=()=>{
       setCon(con-5)
    }
    return(
        <>
        <h1>I Am From P2</h1>
        <p>{props.name}</p>
        <div className="container mt-3 bg-primary text-white">
            <div className="row">
                <div className="col-md-4 text-center">
                    <h1>Calculation</h1>
                    <h1>{con}</h1>
                    <input type="submit" value={"Add"} className="btn btn-success" onClick={add}></input>
                    <input type="submit" value={"Sub"} className="btn btn-danger" onClick={sub}></input>
                </div>
            </div>
        </div>
        </>
    )
}
export default P2