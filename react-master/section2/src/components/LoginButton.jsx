import React, {useContext} from 'react'
import { AuthContext } from '../../../mission/src/context/context'

export default function LoginButton() {
    const {user, dispatch, isLoading} = useContext(AuthContext)

    const handleLogin = async () =>{
        dispatch({type: 'LOGIN_START'})

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            const mockUser = {id: 1, name: '이채영', email: 'cycy8527@gmail.com'}
            
            dispatch({type: 'LOGIN_SUCCESS', payload: mockUser})

        } catch(error) {
            dispatch({type: 'LOGIN_FAILURE', payload: '아이디나 비밀번호가 틀렸습니다'})
        }
    }

    if(user) return <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>;

  return (
    <button disabled={isLoading} type='button' onClick={handleLogin}>{isLoading ? '인증 확인중..': '로그인 하기'}</button>
  )
}
