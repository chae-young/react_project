import React from 'react'
import { useReducer } from 'react'

const initialState = {
  items: [
    {id: 1, name: '사과', price: 2000},
    {id: 2, name: '포도', price: 5000},
  ],
  totalPrice: 2000 + 5000,
  totalQty: 2
}

function cartReducer(state, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
        totalQty: state.totalQty + 1
      }
    case 'REMOVE_ITEM': {
      const removeItem = state.items.find((item) => item.id === action.payload)
      const newItems = state.items.filter((item) => item.id !== removeItem.id)

      if(!removeItem) return state
      
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - removeItem.price,
        totalQty: state.totalQty - 1
      }
    }
    default:
      return state
  }
}

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const nameArr = ['바나나', '오렌지', '파인애플', '사과', '포도']
  const priceArr = [10000, 2000, 5000, 3000, 4300]

  return (
    <div>
        <h1>프로 장바구니</h1>
        <div>

          <button onClick={() => dispatch({
            type: 'ADD_ITEM',
            payload: {id: Date.now(), name: nameArr[Math.floor(Math.random() * nameArr.length)], price: priceArr[Math.floor(Math.random() * priceArr.length)]}
          })}>랜덤 상품 추가하기</button> (클릭시 하단 목록 추가)
        </div>
        <ul>
          {state.items.map((item) => <li key={item.id}>{item.name} ({item.price}원)<button onClick={() => dispatch({
            type:'REMOVE_ITEM',
            payload: item.id
          })}>삭제</button></li>)}
        </ul>
        <div>총수량 {state.totalQty}개 | 총 결제 금액: {state.totalPrice}원</div>
    </div>
  )
}
