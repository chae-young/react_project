import React, {useContext} from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { AuthDispatchContext, AuthStateContext } from '../contexts/contexts'

export default function UserBox() {
    const {user} = useContext(AuthStateContext)
    const dispatch = useContext(AuthDispatchContext)
    const handleChangeName = (e) => {
        dispatch({type: 'CHANGE_NAME', payload: e.target.value})
    }

  return (
    <div>
        {user?.name ? <LogoutButton/>: <LoginButton/>}
        <input type="text"/><button onClick={handleChangeName}>이름바꾸기</button>
    </div>
  )
}
