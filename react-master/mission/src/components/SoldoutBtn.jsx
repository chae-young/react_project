import React, {useContext} from 'react'
import { ProductDispatchContext } from '../context/context'

export default function SoldoutBtn() {
    const dispatch = useContext(ProductDispatchContext)

    const handleSoldOut = () => {
        dispatch({type: 'CHANGE_STATUS'})
    }

  return (
    <button type='button' onClick={handleSoldOut}>품절</button>
  )
}
