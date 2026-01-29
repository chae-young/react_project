import React, { useContext } from 'react'
import { AuthProvider } from '../context/authProvider';
import Header from './authSystem/Header';

export default function ReactTimedAuthSystem() {


    return (
        <AuthProvider>
            <Header/>
        </AuthProvider>
    ); 
}
