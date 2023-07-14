import { useRef,useState } from "react";
const Ex4=()=>{
    const ref1=useRef(null)
const ref2=useRef(null)
const [sum,setSum]=useState();
const add=(event)=>{
    let x=ref1.current.value
    let y=ref2.current.value
    x=parseInt(x)
    y=parseInt(y)
   setSum(x+y);
}
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header bg-primary">
                        <h3>Calculation</h3>
                    </div>
                    <div className="card-body bg-warning">
                    First Number : <input type="number" ref={ref1} placeholder="Enter 1st Number" className="form-control"></input><br></br><br></br>
                    second Number : <input type="number" ref={ref2} placeholder="Enter 1st Number" className="form-control"></input><br></br><br></br>
                       <input type="submit" value={"Add"} onClick={add} className="btn btn-outline-success"></input>
                       <h5>The Sum of two numbers  = {sum}</h5>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Ex4;
