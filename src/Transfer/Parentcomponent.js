import { useState } from "react";
import Childcomponent from "./Childcomponent";

const Parentcomponent=()=>{
    const [state,setState]=useState(
        {
            message:"I Am From ParentComponent..",
            message1:""
        }
    )
    const recieveData=(data)=>{
        setState((state)=>({
           ...state,
           message1:data
        }))
    }
    return(
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body bg-success text-white">
                        <h5>Parentcomponent</h5>
                        <p>Data From Child : {state.message1}</p>
                        <Childcomponent message={state.message} sendData={recieveData}/>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
    </>
    );
};
export default Parentcomponent;