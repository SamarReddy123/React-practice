import React, { useState } from "react";
let Student=()=>{

   let[state,setState]=useState({
      student : [
        {
            name:"samar",
            age:20,
            course:"Java"
        },
        {
            name:"ajay",
            age:22,
            course:"Chemistry"
        }
    ]
}
   );
   let {student}=state;
    return(
        <div className="stu">
            <div className="hello">
                <h2>Wlecome to Sathya</h2>
                <span>Name : {student[0].name}</span><br></br>
                <span>Age : {student[0].age}</span><br></br>
                <span>Course : {student[0].course}</span>
            </div>
            <div className="reddy">
                <h2>Wlecome to Sathya</h2>
                <span>Name : {student[1].name}</span><br></br>
                <span>Age : {student[1].age}</span><br></br>
                <span>Course : {student[1].course}</span>
            </div>

        </div>
    );
}
export default Student