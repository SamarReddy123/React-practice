import react, { useRef, useState } from "react";
const Login=()=>{
    const ref1=useRef(null);
    const ref2=useRef(null);
    const[str,setstr]=useState("");
    const login=()=>{
        let x= ref1.current.value
        let y=ref2.current.value
        if(x=="samar" && y==="s@123"){
            setstr("Login Success...")
        }
        else{
            setstr("Login Fail...")
        }
    }
    return(
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card border-warning">
                        <div className="card-header bg-primary">
                            <h1>Login page</h1>
                        </div>
                        <div className="card-body">
                            <label for="name">Usename : </label>
                            <input id="name" ref={ref1} type="text" placeholder="Enter Username" className="form-control"></input>
                            <label for="pass">Password : </label>
                            <input id="pass" ref={ref2} type="password" placeholder="Enter Password" className="form-control"></input><br></br>
                            <input type="submit" value={"Login"} onClick={login} className="btn btn-success"></input>
                            <h2>{str}</h2>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Login