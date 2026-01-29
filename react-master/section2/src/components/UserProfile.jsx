import React from 'react'
import LoginButton from './LoginButton'
import { AuthProvider } from '../contexts/AuthContext'
import UserBox from './UserBox'

export default function UserProfile() {
  return (
    <AuthProvider>
      <UserBox/>
    </AuthProvider>
  )
}
