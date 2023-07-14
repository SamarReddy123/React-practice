import React from "react";
const initial={
    hi:"samar",
    age:23,
    course:"Java"
}
export const Ucontext=React.createContext();

export const FirstProvider=({children})=>{
    return(
        <>
        <Ucontext.Provider value={initial}>{children}</Ucontext.Provider>
        </>
    )
}