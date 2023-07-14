import React,{ useRef } from "react"

const Ex1=()=>{
    const uname=useRef(null);
    const Regi=(event)=>{
       event.preventDefault();
       uname.current.focus();
    }
    return(
        <>
          <form onSubmit={Regi}>
            <fieldset>
                <legend>Ref Example</legend>
                <input type="text" ref={uname} placeholder="Enter Username"></input><br></br><br></br>
                <input type="submit" value={"Register"}></input>
            </fieldset>
          </form>
        </>
    )
}
export default Ex1