import React from "react";
import Home from "./Home"
import About from "./About";
import Login from "./Login";
import Registration from "./Registration";
import { Route,Routes } from "react-router-dom";
const Body=()=>{
    return(
        <>
         <div className="text-center">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path="registration" element={<Registration/>}></Route>
            </Routes>
         </div>
        </>
    )
}
export default Body