import React,{useRef}from "react";

const Getting=()=>{
    const ref=useRef(null);
   
    const onclick=()=>{
          ref.current.style.color="blue"
          ref.current.style.backgroundColor='pink'
          ref.current.style.textAlign ='center'
    }
    return(
        <>
        <h3 ref={ref}>how to use data from unctrolled input using useRef</h3>
       {/* <input type="text" ref={ref} className="form-control"></input>  */}
        <br></br>
        <button onClick={onclick}>Style</button>
        <br></br>

        </>
    );
}
export default Getting;