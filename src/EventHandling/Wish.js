import React, { useState } from "react";
let Wish=()=>{
    let[state,setState]=useState({
        msg:`Hello`
    })
    let react=()=>{
        setState(()=>({msg:`React`}))
    }
    let ang=()=>{
        setState(()=>({msg:`Angular`}))
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-heading bg-primary text-white">
                             <h3 className="display-3">Welcome</h3>
                            </div>
                            <div className="card-body">
                             <h4>{state.msg}</h4>
                             <button onClick={react} className="btn btn-success">React</button>
                             <button onClick={ang} className="btn btn-warning">Angular</button>
                             <button onClick={()=>{setState(()=>({msg:`Spring`}))}} className="btn btn-danger">Spring</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Wish