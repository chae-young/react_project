import React, { useContext } from 'react'
import Sidebar from './theme/Sidebar';
import { ThemeProvider } from '../context/ThemeContext';

export default function ReactTimesCon2() {


    return (
        <ThemeProvider>
            <h1>React Times</h1>
            <Sidebar/>
        </ThemeProvider>
    ); 
}
