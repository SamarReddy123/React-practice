import { useRef,useState } from "react";
const Ex3=()=>{
    const r1=useRef(null);
    const[fname,setFname]=useState("");
    const r2=useRef(null);
    const[lname,setLname]=useState("");

    const register=(event)=>{
        event.preventDefault();
        setFname(r1.current.value)
        setLname(r2.current.value)
    }
    return(
        <>
        <div className="row">
            <div className="col-md-6 mt-5">
                <h2>Part1</h2>
                <form onSubmit={register}>
                    <fieldset>
                        <legend>Names</legend>
                        <table>
                            <tr>
                                <td>FirstName : </td>
                                <td>
                                    <input type="text" ref={r1} placeholder="Enter FirstName" className="form-control"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>SecondName : </td>
                                <td>
                                    <input type="text" ref={r2} placeholder="Enter SecondName" className="form-control"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value={"submit"} className="btn btn-outline-success"></input>
                                </td>
                            </tr>
                        </table>
                    </fieldset>
                </form>
            </div>
            <div className="col-md-6 mt-5">
            <h2>Part2</h2>
            <h1>{fname}</h1>
            <h2>{lname}</h2>
            </div>
        </div>
        </>
    )
}
export default Ex3