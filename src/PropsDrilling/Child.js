import React from 'react';
import Subchild from './Subchild';
const Child=(props)=>{
    const{name,num,children}=props
    return(
        <>
        <h1>I am from Child</h1>
        <h3 style={{color:"blue"}}> Name : {name}</h3>
      <h3 style={{color:"green"}}> Number : {num}</h3>
      <h3 style={{color:"red"}}>{children}</h3> 
      <Subchild {...props}></Subchild>
        </>
    )
}
export default Child;