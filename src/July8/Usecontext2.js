import React from "react";
const state=[
    {
        name:"samar",
        age:"24",
        course:"Java"
    },
    {
        name:"ajay",
        age:"25",
        course:"Pharma"
    },
    {
        name:"kiran",
        age:"22",
        course:"Python"
    }
]

export const Usercontext2=React.createContext();

export const Usercontext2Provider=({children})=>{
    return(
        <Usercontext2.Provider value={state}>{children}</Usercontext2.Provider>
    )
}