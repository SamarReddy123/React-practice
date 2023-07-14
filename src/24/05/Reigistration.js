import React, { useState } from "react";
let Registration=()=>{

    let[state,setState]=useState({
         student:{
            sname:'',
            fname:'',
            email:'',
            mobile:'',
            course:'',
            address:'',
            term:false
         }
    })
    let{student}=state;
    let changeInput=(event)=>{
       setState((state)=>({
        student:{
            ...state.student,
            [event.target.name]:event.target.value
        }
      }))
    }
    let inputCheck=(event)=>{
        setState((state)=>({
           student:{
            ...state.student,
            [event.target.name]:event.target.checked
           }
        }))
    }
    let submitDetails=(event)=>{
        event.preventDefault();
        console.log(student)
    }
    return(
        <>
        {/* <pre>{JSON.stringify(student)}</pre> */}
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5 bg-primary text-white">
                    <p className="h3 ">Registration Page</p>
                    <p className="h5"> please register the form for college admision </p>

                    <div className="card">
                      <div className="card-header">
                        <p className="h3 bg-warning text-dark">Registration Form</p>
                      </div>
                      <div className="card-body bg-light">
                         <form onSubmit={submitDetails}>
                            <div className="mb-3">
                                <input
                                name="sname"
                                value={student.sname}
                                onChange={changeInput}
                                type="text" className="form-control" placeholder="Studentname"></input>
                            </div>
                            <div className="mb-3">
                                <input
                                name="fname"
                                value={student.fname}
                                onChange={changeInput}
                                type="text" className="form-control" placeholder="Fathername"></input>
                            </div>
                            <div className="mb-3">
                                <input
                                 name="email"
                                 value={student.email}
                                 onChange={changeInput}
                                type="email" className="form-control" placeholder="email"></input>
                            </div>
                            <div className="mb-3">
                                <input
                                 name="mobile"
                                 value={student.mobile}
                                 onChange={changeInput}
                                type="number" className="form-control" placeholder="mobile"></input>
                            </div>
                            <div className="mb-3">
                                <select 
                                 name="course"
                                 value={student.course}
                                 onChange={changeInput}
                                className="form-control">
                                   <option value="">Select Course</option>
                                   <option value="Java">Java</option>
                                   <option value="Python">Python</option>
                                   <option value=".net">.net</option>
                                   <option value="Spring">Spring</option>
                                </select>  
                            </div>
                            <div className="mb-3">
                                <textarea
                                 name="address"
                                 value={student.address}
                                 onChange={changeInput}
                                rows={4} className="form-control" placeholder="Address"></textarea>
                            </div>
                            <div className="mb-3">
                                <input 
                                name="term"
                                onChange={inputCheck}
                                type="checkbox" className="form-check-input"/> Accept Terms
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="btn btn-success" value="Register"/>
                            </div>
                         </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Registration