import React from "react";
class Employee extends React.Component{
    constructor(){
        super();
        this.state={
            employee:[
                {
                name:"samar",
                age:23,
                course:"java"
            },
            {
                name:"ajay",
                age:24,
                course:"chemistry"
            }
        ]
        }
        
    }   
  render(){
    return(
    <div className="reddy">
        <div >
            Name = {this.state.employee[0].name}<br></br>
            Age = {this.state.employee[0].age}<br></br>
            Course = {this.state.employee[0].course}
        </div><br></br><br></br>
         <div >
         Name = {this.state.employee[1].name}<br></br>
         Age = {this.state.employee[1].age}<br></br>
         Course = {this.state.employee[1].course}
     </div>
    </div>
    );
  }
}
export default Employee