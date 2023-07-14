import { useState } from "react";

const Childcomponent=(props)=>{
    const [msg,setMsg]=useState(
        {
            message2:"I Am From Child Component"
        }
    )
    const ClickBtn=()=>{
            props.sendData(msg.message2)
    }
    return(
    <>
     <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body bg-warning text-dark">
                        <h5>Childcomponent</h5>
                        <p>Data From Parent : {props.message}</p>
                        <button onClick={ClickBtn} className="btn btn-dark">Send</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
    );
};
export default Childcomponent;