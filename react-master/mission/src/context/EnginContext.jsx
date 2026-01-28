import React, {useReducer} from 'react'
import { AuthEnginContext } from './context'

const initialEnginState = {
  items: [],
  isLoading: false,
  error: null
}

function enginReducer(state, action) {
  switch(action.type) {
      case 'FETCH_START': 
        return {
          ...state,
          isLoading: true,
        }
      case 'FETCH_SUCCESS': 
        return {
          ...state,
          isLoading: false,
          items: action.payload,
          error: null
        }
      case 'FETCH_FAILUR': 
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      default:
        return state
  }
}

export default function EnginProvider({children}) {
  const [state, dispatch] = useReducer(enginReducer, initialEnginState)
  
  return (
    <AuthEnginContext.Provider value={{...state, dispatch}}>{children}</AuthEnginContext.Provider>
  )
}

