import React from "react";
const state={
    name:"samar",
    age:24,
    course:"java"
}
export const UserContext1=React.createContext();

export const UserContext1Provider=({children})=>{
    return(
        <UserContext1.Provider value={state}>{children}</UserContext1.Provider>
    )
}