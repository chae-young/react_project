import React from 'react'
import LoginButton from './LoginButton'
import { AuthProvider } from '../contexts/AuthContext'

export default function UserProfile() {
  return (
    <AuthProvider><LoginButton/></AuthProvider>
  )
}
