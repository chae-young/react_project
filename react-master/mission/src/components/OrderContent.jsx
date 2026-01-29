import React from 'react'
import EnginProvider from '../context/EnginContext'
import OrderList from './OrderList'

export default function OrderContent() {

  return (
    <div>
        <h1>[ 📊 Admin Dashboard ] </h1>
        <EnginProvider>
            <OrderList/>
        </EnginProvider>
    </div>
  )
}
