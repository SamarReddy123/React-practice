import React from 'react';
import Child from './Child';
const Parent=()=>{
    return(
        <>
        <h1 style={{color:"blue"}}>I am from parent</h1>
        <Child></Child>
        </>
    )
}
export default Parent;