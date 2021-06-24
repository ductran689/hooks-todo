import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext'

function Navbar(props) {
    // load contexts
    const { theme } = useContext(ThemeContext) // destructor để móc theme trong ThemeContextData
    const { auth,toggleAuth } = useContext(AuthContext)

    
    const { isLightTheme, light, dark } = theme // destructor để móc 3 variable trong theme
    const style = isLightTheme ? light : dark

    return (
        <div className="navbar" style={style}>
            <h1>My Hook App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    
                    {auth? 'You are logged in ' : ''} 
                    <button onClick={toggleAuth}>{auth?'Logout': 'Login'}</button>
                </li>

            </ul>

        </div>
    );
}

export default Navbar;