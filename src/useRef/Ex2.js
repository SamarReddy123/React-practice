import { useRef, useState } from "react"
const Ex2=()=>{
      const uname=useRef(null)
      const pass=useRef(null)
      const[res,setRes]=useState("");
      const login=(event)=>{
        event.preventDefault();
       let x = uname.current.value;
       let y = pass.current.value;
       x=="samar" && y=="s@123"?setRes("Login Success"):setRes("Login Fail")
      }
    return(
        <>
          <form onSubmit={login}>
            <fieldset style={{textAlign:"center"}}>
                <legend>Login Page</legend>
                <input type="text" ref={uname} placeholder="Enter Username"></input><br></br><br></br>
                <input type="password" ref={pass} placeholder="Enter Password"></input><br></br><br></br>
                <input type="submit" value={"Login"} className="btn btn-outline-success"></input>
                <h2>{res}</h2>
            </fieldset>
          </form>
        </>
    )
}
export default Ex2