import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('theme-light');
    
    const changeTheme = (themeName, setShowThemes) => {
        setTheme(themeName)
        localStorage.setItem('theme-name', themeName);
        setShowThemes(false);
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme-name');
        if(currentTheme){
            setTheme(currentTheme);
        }
    }, [])

    const values = {
        theme : theme,
        changeTheme
    }
    return (
        <ThemeContext.Provider value={values}>
                {children}
        </ThemeContext.Provider>)
}

export const useTheme = () => useContext(ThemeContext);