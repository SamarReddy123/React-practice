import React from "react";
class Number extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:props.num
        }
    }
    render(){
        return(
            <div>
           <h1>Increment & Decrement</h1>
           <h2> Num = {this.state.count}</h2>
           <button className="add" onClick={()=>{
            this.setState({count:this.state.count+5})}}>Add</button>
           
           <button className="delete" onClick={()=>{this.setState({count:this.state.count-5})}}>Delete</button>
           </div>

           
        );
    }
}
export default Number