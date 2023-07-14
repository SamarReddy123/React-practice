import React from "react";
import {Link} from 'react-router-dom'
const Nav=()=>{
    return(
        <>
        <h1>Welcome To React-Router</h1>
        <ul>
           <Link to={"/home"}><li>Home</li></Link>
           <Link to={"/contact"}><li>Contact</li></Link>
           <Link to={"/about"}><li>About</li></Link>
        </ul>
        </>
    )
}
export default Nav;