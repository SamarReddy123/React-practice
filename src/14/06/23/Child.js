import React from "react";
class Child extends React.Component{
   render(){
    return(
        <>
        <h1 style={{color:"red"}}>Child component</h1>
        <h2>{this.props.obj.name}</h2>
        {
           this.props.arr.map((a,b)=>{
                return(
                <h1 key={b}>{a}</h1>
                )
            })
        }
        <h3>{this.props.arr1+" "}</h3>
        </>
    )
   }
}
export default Child