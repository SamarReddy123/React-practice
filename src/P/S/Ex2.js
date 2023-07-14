import React from "react";
class Ex2 extends React.Component{
   constructor(props){
    super(props)
   }
   render(){
    return(
        <div id="div">
            <h2>Employee id = {this.props.eid}</h2>
            <h2>Employee name = {this.props.ename}</h2>
        </div>
    )
   }
}
export default Ex2