import React from "react";
import P1 from "./P1";
class P extends React.Component{
   constructor(props){
    super(props)
    this.state={
        count:props.number
    }
   }
    render(){
        return(
            <>
            <h1>Hello World...</h1>
             <div className="container mt-3 bg-primary text-white">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <h1>Calculation</h1>
                       <h1>{this.state.count}</h1>
                       <input type="submit" value={"Incre"} className="btn btn-success" onClick={()=>{this.setState({count:this.state.count+5})}}></input>
                       <input type="submit" value={"Decre"} className="btn btn-warning" onClick={()=>{this.setState({count:this.state.count-5})}}></input>
                    </div>
                </div>
             </div>
            <P1></P1>
            </>
        );
    }
}
export default P