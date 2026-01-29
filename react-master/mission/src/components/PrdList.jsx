import React from 'react'
import { useContext } from 'react'
import { ProductDispatchContext, ProductStateContext } from '../context/context'
import SoldoutBtn from './SoldoutBtn'

export default function PrdList() {
    const {items}= useContext(ProductStateContext)

  return (
    <ul>
        {items.map((item) => <li key={item.id}>{item.name}<SoldoutBtn/></li>)}
    </ul>
  )
}
