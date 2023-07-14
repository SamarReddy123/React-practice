import React from "react";
class Count extends React.Component{
    constructor(){
        super()
        this.state={
            count:10
        }
    }
    render(){
        return(
            <>
            <h1>Class component</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                       <div className="card bg-primary text-center">
                        <div className="card-header bg-warning">
                            <h2>Calculation</h2>
                        </div>
                        <div className="card-body">
                        <h3>{this.state.count}</h3>
                        <button className="btn btn-success" onClick={()=>{this.setState({count:this.state.count+5})}}>Add</button>
                        <button className="btn btn-danger" onClick={()=>{this.setState({count:this.state.count-5})}}>Delete</button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Count