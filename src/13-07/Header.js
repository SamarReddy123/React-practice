import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
        <div className="row" style={{backgroundColor:"pink"}}>
            <div className="col-md-8">
                <h4>Vr Executive Hostle</h4>
            </div>
            <div className="col-md-1">
                <Link to="/">Home</Link>
            </div>
            <div className="col-md-1">
                <Link to="about">About</Link>
            </div>
            <div className="col-md-1">
                <Link to="registration">Registration</Link>
            </div>
            <div className="col-md-1">
                <Link to="login">Login</Link>
            </div>
        </div>
        </>
    )
}
export default Header