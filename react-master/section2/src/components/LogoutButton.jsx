import React, {useContext, memo} from 'react'
import { AuthDispatchContext } from '../contexts/contexts'

function LogoutButton() {
    const dispatch = useContext(AuthDispatchContext)
    console.log('리렌더링?')
  return (
    <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>
  )
}

export default memo(LogoutButton)
