import { createContext } from 'react'

export const NoticeContext = createContext('현재 등록된 공지사항이 없습니다.')
export const CenterContext = createContext(null);
export const AuthContext = createContext('로그인 정보가 없습니다.')

