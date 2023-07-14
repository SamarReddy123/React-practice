import React from "react";
class Employee extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="reddy">
                <div>
                     <h2>Welcome {this.props.name}</h2>
                     <h3>Age = {this.props.age} years</h3>
                </div>
            </div>
        );
    }
}
export default Employee