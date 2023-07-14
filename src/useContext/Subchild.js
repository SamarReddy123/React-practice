import React,{useContext} from 'react';
import { UserContext } from './Contextdata';
const Subchild=()=>{
    const data=useContext(UserContext);
    const{name,age,designation}=data
    return(
        <>
        <h1 style={{color:"green"}}>I am from Subchild</h1>
        <h2>NAME : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Designation : {designation}</h2>
        </>
    )
}
export default Subchild;