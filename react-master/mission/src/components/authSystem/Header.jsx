import React, {useContext} from 'react'
import { AuthContext } from '../../context/context'

export default function Header() {
  const authState = useContext(AuthContext)

  return (
    <header>
      {authState.user ? <div>
          <h1>React Times: [ {authState.user.name}님 {authState.user.isAdmin && `(관리자)`} ] [<button onClick={authState.logOut}>'로그아웃'</button>]</h1>
          
          {authState.user.isAdmin && (
            <ul>
                <li>1. 기사작성하기</li>
                <li>2. 사용자 관리</li>
            </ul>
          )}
        </div>: <div>로그인 해주세요 <button onClick={authState.login}>'로그인'</button></div>}
    </header>
  )
}
