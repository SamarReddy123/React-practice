import React, { useState } from "react";
import Pro2 from "./Pro2";
let Pro1=()=>{
    let[num,setNum]=useState(100)
    let[str,setStr]=useState("Kohli")
    let[arr,setArr]=useState([10,20,30,40,50])
    return(
    <>
      <Pro2 num={num} arr={arr} str={str}>SAMARASIMHAREDDY</Pro2>
    </>
    )
}
export default Pro1