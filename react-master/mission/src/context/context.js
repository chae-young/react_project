import {createContext} from 'react'

export const ThemeContext = createContext({
    isDarkMode: false,
    toggleTheme: () => null
})

export const AuthContext = createContext('로그인 정보가 없습니다.')
export const FormContext = createContext()
export const AlertContext = createContext()