import React, {useContext} from 'react'
import { AuthContext } from '../../../mission/src/context/context'
import LogoutButton from './LogoutButton'
import { AuthDispatchContext, AuthStateContext } from '../contexts/contexts'

export default function LoginButton() {
    const {user, isLoading} = useContext(AuthStateContext)
    const dispatch = useContext(AuthDispatchContext)

    const handleLogin = async () =>{
        dispatch({type: 'LOGIN_START'})

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            const mockUser = {id: 1, name: '이채영', email: 'cycy8527@gmail.com'}
            
            dispatch({type: 'LOGIN_SUCCESS', payload: mockUser})

        } catch(error) {
            console.error(error)
            dispatch({type: 'LOGIN_FAILURE', payload: '아이디나 비밀번호가 틀렸습니다'})
        }
    }


  return (
    <button disabled={isLoading} type='button' onClick={handleLogin}>{isLoading ? '인증 확인중..': '로그인 하기'}</button>
  )
}
