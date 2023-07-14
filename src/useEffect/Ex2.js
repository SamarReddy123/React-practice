import React, { useEffect, useState } from "react";
const URL="https://jsonplaceholder.typicode.com/users"

const Ex2=()=>{
    const[state,setState]=useState([]);
    const[loading,setLoading]=useState(false);

    const fetchdata = async (url)=>{
        setLoading(true)
      try {
        const response = await fetch(url);
        const data = await response.json();
         setState(data)
         setLoading(false)
      } 
      catch (error) {
        setLoading(false)
      }
    }

    useEffect(()=>{
        fetchdata(URL)
    },[])

    if(loading){
        return(
            <div>
                <h2>Loading....</h2>
            </div>
        )
    }
    return(
        <>
        <h1>Example 2 useEffect</h1>
        <ul>
            {
                state.map((x)=>{
                    return(
                        <li key={x.id}>
                        <div>{x.name}</div>
                        <div>{x.email}</div>
                    </li>
                    )
                })
            }
        </ul>
        </>
    );
}
export default Ex2;