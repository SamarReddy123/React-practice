import { useRef } from "react";
const Ex5=()=>{
    const ref=useRef(null)
    const giveStyle=()=>{
          ref.current.style.color="red"
    }
    const changecolor=()=>{
        if(ref.current.style.color=="red"){
            ref.current.style.color="blue"
        }
        else{
            ref.current.style.color="green"
        }
    
    }
    return(
        <>
        <h1 ref={ref}>my name is samarasimhareddy</h1>
         <button onClick={giveStyle} className="btn btn-outline-success">Style it</button>
         <button onClick={changecolor} className="btn btn-outline-primary">change</button>
        </>
    );
}
export default Ex5;