import React, {useContext} from 'react'
import { LangContext } from '../../context/LanguageContext'

export default function ContentCard() {
  const lang = useContext(LangContext)
  return (
    <div>{lang === 'ko' ? '뉴스읽기' : 'Read News'}</div>
  )
}
