import {useReducer} from 'react'
import { AlertContext } from './context';
import { AlertReducer, initialAlert } from '../../../section2/src/contexts/AlertReducer';



export default function AlertProvider({children}) {
    const [state, dispatch] = useReducer(AlertReducer, initialAlert)

    return (
        <AlertContext.Provider value={{state, dispatch}}>{children}</AlertContext.Provider>
    )
}