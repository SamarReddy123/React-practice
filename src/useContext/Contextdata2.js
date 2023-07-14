import React from "react";
const initial=[
    {
        name:"Ajay",
        age:24,
        designation:"Pharma"
    },
    {
        name:"Kiran",
        age:22,
        designation:"Developer"
    },
    {
        name:"Samar",
        age:23,
        designation:"Developer"
    }
]

export const MainUserContext=React.createContext();

export const MainUserContextProvider=({children})=>{
    return(
        <>
        <MainUserContext.Provider value={initial}>{children}</MainUserContext.Provider>
        </>
    )
}