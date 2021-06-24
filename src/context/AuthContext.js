import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    //State
    const[auth,setAuth] =useState(false)

    // toggleAuth

    const toggleAuth = () => {
        setAuth(!auth)
    }


    // context data

    const AuthContextData = {
        auth,
        toggleAuth
        
    }
    // return

    return(
        <AuthContext.Provider value ={AuthContextData}>
            {children}
        </AuthContext.Provider>
        )

}

export default AuthContextProvider
