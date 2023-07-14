import React, { useState } from "react";
let Check=()=>{
    let[val,setValue]=useState();
    
    let GiveInput=(event)=>{
        
        setValue(event.target.value);
      
    }
    let checkInput=()=>{
        <p>{val%1==0?alert("Number"):alert("not a number")}</p>
  }
    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5 bg-warning text-white">
                <p className="h2">Checking</p>
                    <div className="card">
                     <div className="card-header bg-danger  text-white">
                        <p className="h3">validation</p>
                     </div>
                     <div className="card-body bg-light">
                        <div className="mb-3">
                          <input onChange={GiveInput} type="text" className="form-control" value={val}></input>
                        </div>
                        <div className="mb-3">
                            <input onClick={checkInput} type="submit" className="btn btn-success" value="check"></input>
                        </div>
                        <div className="mb=3">
                            <p></p>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Check;