import { useState } from "react"

const Ex3=()=>{
    const[state,setState]=useState(
        {
           student:[
            {
                name:"ajay",
                course:"chemistry",
                fee:5000
            },
            {
                name:"samar",
                course:"java",
                fee:6000
            },
            {
                name:"kiran",
                course:"python",
                fee:7000
            }
           ]
        }
    )
        let{student}=state;
    return(
        <div>
        <div id="div">
            <h2>{student[0].name}</h2>
            <h2>{student[0].course}</h2>
            <h2>{student[0].fee}</h2>
        </div>
        <div id="div">
        <h2>{student[1].name}</h2>
        <h2>{student[1].course}</h2>
        <h2>{student[1].fee}</h2>
    </div>
    <div id="div">
    <h2>{student[2].name}</h2>
    <h2>{student[2].course}</h2>
    <h2>{student[2].fee}</h2>
</div>
</div>
    )
}
export default Ex3