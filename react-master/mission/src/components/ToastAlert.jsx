import React, {useContext} from 'react'
import { AlertContext } from '../context/context'

export default function ToastAlert() {
    const {state, dispatch} = useContext(AlertContext)

    const handleCloseAlert = () => {
        dispatch({ type: 'REMOVE_TOAST' })
    }

  return (
    <>    
        {state.message && 
        <div style={{
            position: 'fixed',
            top:0,
            left:'50%',
            transform: 'translateX(-50%)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
        }}>{state.message}<button type='button' onClick={handleCloseAlert}>닫기</button></div>
        }
    </>
  )
}
