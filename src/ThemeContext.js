import React, {Component, createContext, useState} from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [language, setLanguage] = useState('javascript')
    const [dark, setDark] = useState(true);
    const [status, setStatus] = useState(false); //  false desynced and true is synced

    return (
        <ThemeContext.Provider value={{language, setLanguage, dark, setDark, status, setStatus}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider