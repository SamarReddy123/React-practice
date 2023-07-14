import React from "react";
import Student1 from "./Ex5";
const Student=()=>{
    const StudentDetails=[
        {
            id:10,
            name:"samar",
            age:23,
            course:"java"
        },
        {
            id:20,
            name:"ajay",
            age:24,
            course:"chemistry"
        },
        {
            id:30,
            name:"kiran",
            age:22,
            course:"python"
        }
    ]
    return(
        <>
        <h1>Welcome to props</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
            </tr>
            {
            StudentDetails.map((item)=>{
                return (
                    <tr key={item.id}>
                        <td >{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.course}</td>
                    </tr>
                )
            })
        }
        </table>
        <Student1/>
        </>
    )
}
export default Student;