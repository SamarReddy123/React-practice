import React from "react";
let Pro2=(props)=>{
    return(<>
       <h1>{props.num}</h1>
       <h1>{props.children}</h1>
       {
        props.arr.map((a,b)=>{
            return(
                <h2 key={b}>{a}</h2>
            )
        })
       }
       <h2>{props.str}</h2>
    </>)
}
export default Pro2