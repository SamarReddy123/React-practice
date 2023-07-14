import React, { useContext } from "react";
import Ucsubchild from "./Ucsubchild";
import { UserContext1 } from "./Usecontext1";
const Ucchild=()=>{
    const data=useContext(UserContext1);
    const{name,age,course}=data;
    return(
        <>
        <h1>I AM From Ucchild.....</h1>
        <h2 style={{backgroundColor:"yellow"}}>{name}</h2>
        <h2 style={{backgroundColor:"yellow"}}>{age}</h2>
        <h2 style={{backgroundColor:"yellow"}}>{course}</h2>
        <Ucsubchild></Ucsubchild>
        </>
    )
}
export default Ucchild;