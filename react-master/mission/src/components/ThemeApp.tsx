import React, { useState } from 'react'
import { LangContext } from '../context/LanguageContext';
import Layout from './reactTimes/Layout';

export default function ThemeApp() {
    const [lang, setLang] = useState('ko')
    return (
        <>
            <h1>React Times</h1>
            <button type="button" onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}>언어 변경</button>
            <LangContext.Provider value={lang}>
                <Layout/>
            </LangContext.Provider>
        </>
    ); 
}
