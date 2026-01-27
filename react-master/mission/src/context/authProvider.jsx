import {useState} from 'react'
import {AuthContext, ThemeContext} from './context'

export function AuthProvider({children}) {
    const [user, setUser] = useState({
        name: '이채영',
        isLogin: true,
        isAdmin: true,
    })

    const login = () => {
        setUser((prev) => ({
            ...prev,
            name: '이채영',
            isLogin: true,
            isAdmin: true,
        }))
    }

    const logOut = () => {
        setUser(null)
    }

    const state = {
        user,
        login,
        logOut
    }


    return (            
        <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    )
}