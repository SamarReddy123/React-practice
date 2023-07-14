import React, { useState } from "react";
const EvenOdd=()=>{
    const[num,setNum]=useState();
    const[str,setStr]=useState("");

    const change=(event)=>{
        setNum(event.target.value)
    }
    const check=()=>{
        if(num%2==0){
            setStr("Even Number")
        }
        else{
            setStr("Odd Number")
        }
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-warning">
                        <div className="card-header bg-primary">
                            <h1>Even or Odd</h1>
                        </div>
                        <div className="card-body">
                            <input type="number" value={num} onChange={change} className="form-control"></input><br></br>
                            <input type="submit" value={"Check"} className="btn btn-success" onClick={check}></input>
                            <h2>{str}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default EvenOdd;