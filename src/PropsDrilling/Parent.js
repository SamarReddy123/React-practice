import React from 'react';
import Child from './Child';
const Parent=()=>{
    const name="samar"
    const num=100
    return(
        <>
        <h1>PropsDrilling From parent</h1>
        <Child name={name} num={num}>AjayReddy</Child>
        </>
    )
}
export default Parent;