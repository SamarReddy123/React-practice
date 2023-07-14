import React, { useContext } from "react";
import Three from "./Three";
import { Scontext } from "./SecondProvider";
const Two =()=>{
    const data=useContext(Scontext);
    return(
        <>
        <h1>I Am From Two</h1>
         <div style={{backgroundColor:"yello"}}>
         <table className="table table-striped text-center table-border">
            <tr>
               <th>Name</th>
               <th>Age</th>
               <th>Course</th>
            </tr>
            <tr>
                <td>{data[0].name}</td>
                <td>{data[0].age}</td>
                <td>{data[0].course}</td>
            </tr>
            <tr>
                <td>{data[1].name}</td>
                <td>{data[1].age}</td>
                <td>{data[1].course}</td>
            </tr>
            <tr>
                <td>{data[2].name}</td>
                <td>{data[2].age}</td>
                <td>{data[2].course}</td>
            </tr>
            <tr>
                <td>{data[3].name}</td>
                <td>{data[3].age}</td>
                <td>{data[3].course}</td>
            </tr>
         </table>
         </div>
        <Three/>
        </>
    )
}
export default Two;