import React from "react";
const initial=[
    {
        name:"samar",
        age:23,
        course:"java"
    },
    {
        name:"kiran",
        age:22,
        course:"python"
    },
    {
        name:"ajay",
        age:24,
        course:"chemistry"
    },
    {
        name:"venkat",
        age:24,
        course:"navy"
    }
]

export const Scontext=React.createContext();

export const SecondProvider=({children})=>{
    return(
        <>
        <Scontext.Provider value={initial}>{children}</Scontext.Provider>
        </>
    )
}