import React, {useContext} from 'react'
import { AlertContext } from '../context/context'

export default function ProductCard({name}) {
    const {dispatch} = useContext(AlertContext)

    const handleAlertMsg = () => {
        dispatch({ type: 'ADD_TOAST', message: '장바구니에 추가되었습니다!' })
    }

  return (
    <div>상품: {name} <button type='button' onClick={handleAlertMsg}>장바구니 담기</button></div>
  )
}
