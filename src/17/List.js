import React, { useRef, useState } from "react";
const List=()=>{
    const[str,setStr]=useState("");
    const[list,setList]=useState([]);

    const change=(event)=>{
       setStr(event.target.value)
    }
    const add=()=>{
        setList((list)=>[...list,str])
        setStr("")
    }
    return(
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-warning">
                        <div className="card-header bg-primary">
                            <h2>List of Words</h2>
                        </div>
                        <div className="card-body">
                            <input type="text" className="form-control" onChange={change} value={str}></input><br></br>
                            <input type="submit" value={"Add"} className="btn btn-success" onClick={add}></input>
                            <ul>{list.map(x=><li><h4>{x}</h4></li>)}</ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}
export default List