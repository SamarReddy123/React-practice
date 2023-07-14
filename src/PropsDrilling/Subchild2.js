import React from 'react';
const Subchild2=(props)=>{
    return(
        <>
        <h1>I am from subchild 2</h1>
        <h3 style={{color:"yellow"}}> Name : {props.name}</h3>
      <h3 style={{color:"skyblue"}}> Number : {props.num}</h3>
      <h3 style={{color:"blue"}}>Childern : {props.children}</h3>
      <h3 style={{color:"red"}}>Name2 : {props.str}</h3>
        </>
    )
}
export default Subchild2