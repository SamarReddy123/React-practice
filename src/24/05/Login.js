import React, { useState } from "react";
let Login=()=>{
    let[state,setState]=useState({
         employee:{
            ename:'',
            epass:''
         }
    })
    let {employee}=state

    let changeInput=(event)=>{
        setState((state)=>({
            employee:{
                ...state.employee,
                [event.target.name]:event.target.value
            }
        }))
    }

    let submitDettails=(event)=>{
        event.preventDefault();
        console.log(employee)
    }
    return(
       <>
       <h1>Hello World</h1>
       <pre>{JSON.stringify(employee)}</pre>
       <div className="container mt-3">
        <div className="row">
            <div className="col-md-4 h3 bg-danger text-white">
                <p>LoginPage</p>
                <p>Login with below Inputs</p>
                <div className="card">
                <div className="card-header">
                   <p className="h4 bg-dark text-white">LoginForm</p>
                </div>
                <div className="card-body bg-light">
                   <form onSubmit={submitDettails}>
                    <div className="mb-3">
                        <input
                        name="ename"
                        value={employee.ename}
                        onChange={changeInput}
                        type="text" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className="mb-3">
                        <input 
                        name="epass"
                        value={employee.epass}
                        onChange={changeInput}
                        type="password" className="form-control" placeholder="Password"></input>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-outline-success" value="submit"></input>
                    </div>
                   </form>
                </div>
            </div>
            </div>
        </div>
       </div>
       </>
    );   
}
export default Login