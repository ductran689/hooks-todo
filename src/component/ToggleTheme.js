import React, { useContext } from 'react'
import {ThemeContext} from '../context/ThemeContext'
const ToggleTheme = () => {

    //móc hàm toggleTheme trong ThemeContext
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <div className="toggle-btn" >
            <button onClick={toggleTheme}>Change Theme Color</button>
        </div>
    )
}

export default ToggleTheme
