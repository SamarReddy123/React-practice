import React from "react";
const Login=()=>{
    return(
        <>
        <h1>Welcome to Login page</h1>
        <form>
            Name : <input type="text" name="uname"></input><p></p>
            Password : <input type="password" name="psw"></input><p></p>
            <input type="submit" value="Login"></input>
        </form>
        </>
    )
}
export default Login