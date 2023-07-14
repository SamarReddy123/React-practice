import React from "react";

let Student=(props)=>{
    console.log(props);
    return(
        <div className="reddy">
           <h1>Student = {props.name} </h1>
           <h2>Course = {props.course}</h2>
           <h2>Age = {props.age} years</h2>
          <h1> <pre>{JSON.stringify(props)}</pre></h1>
        </div>
    );
}
export default Student