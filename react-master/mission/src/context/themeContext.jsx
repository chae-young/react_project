import {useState, useEffect} from 'react'
import {ThemeContext} from './context'

export function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev)
    }

    const state = {
        toggleTheme,
        isDarkMode
    }


    useEffect(() => {
        document.body.style.background = isDarkMode ? '#000' : '#FFF'
        document.body.style.color = isDarkMode ? '#fff' : '#000'
    },[isDarkMode])

    return (
        <ThemeContext.Provider value={state}>
            {children}
        </ThemeContext.Provider>
    )
}