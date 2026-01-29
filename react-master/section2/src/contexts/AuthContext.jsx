import { useReducer, useMemo } from 'react'
import { AuthStateContext, AuthDispatchContext } from './contexts'


const authReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {user: null, isLoading: true, error: null}
        case "LOGIN_SUCCESS":
            return {user: action.payload, isLoading: false, error: null}
        case "LOGIN_FAILURE":
            return {user: null, isLoading: false, error: action.payload}
        case "LOGOUT":
            return {user: null, isLoading: false, error: null}
        case "CHANGE_NAME": 
            return {...state, name: action.payload}
        default:
            return state
    }
}

export function AuthProvider({children}) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isLoading: false,
        error: null
    })

    const memoizedState = useMemo(() => state, [state])

    return (
        <AuthStateContext.Provider value={memoizedState}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}