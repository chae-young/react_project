import React, {useContext} from 'react'
import { ThemeContext } from '../../context/context'

export default function ThemeButton() {

  const {isDarkMode, toggleTheme} = useContext(ThemeContext)

  return (
    <button type='button' onClick={toggleTheme}>버튼: {isDarkMode ? '기본' : '다크모드'}로 변경</button>
  )
}
