import React from "react";
const initial={
    name:"Ajay",
    age:24,
    designation:"Pharma"
}

export const UserContext=React.createContext();

export const UserContextProvider=({children})=>{
    return(
        <>
        <UserContext.Provider value={initial}>{children}</UserContext.Provider>
        </>
    )
}