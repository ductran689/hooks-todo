import React,{createContext, useState} from 'react'

export const ThemeContext = createContext() // tạo context ThemeContext 

const ThemeContextProvider = ({children}) => {
    // state
const [theme,setTheme]= useState({
    isLightTheme:true,
    light:{
        background: 'rgb(240,240,240)' ,
        color: 'black',

    },
    dark:{
        background: 'rgb(39,39,39)',
        color: 'white'
    }
    
})

const [themeTodo,setThemeTodo]= useState({
    isLightTodo:false,
    light:{
        background:'rgb(166, 52, 70)',
        color:'black'
    },
    dark:{
        background: 'rgb(162, 250, 163)',
        color: 'rbg(166, 52, 70)'
    }
})

    //Funtion change Theme color

    const toggleTheme = () =>{
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
        setThemeTodo({
            ...themeTodo,
            isLightTodo: !themeTodo.isLightTodo
        })
    }
    // context data
    const themeContextData = {
        theme,
        themeTodo,
        toggleTheme
    }

    // return
    return (
        <ThemeContext.Provider value ={themeContextData}>
            {children}
        </ThemeContext.Provider>
        )
}
export default ThemeContextProvider


