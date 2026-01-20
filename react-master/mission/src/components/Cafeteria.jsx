import React from 'react'
import { useReducer } from 'react'

function cafeteriaReducer(state, action) {
  switch(action.type) {
    case 'COOK_RICE':
      return state + 10
    case 'SERVE_RICE':
      if(state > 0) {
        alert('밥 재고는 0미만으로 내려갈수 없습니다.') 
        return state
      }
      return state > 0 ? state - 1 : 0
    default:
      return state
  }
}

export default function Cafeteria() {
  const [count, dispatch] = useReducer(cafeteriaReducer, 10)
  return (
    <div>
        <h1>학교 급식실 재고관리</h1>
        <p>현재 밥 재고: {count} 인분</p>
        <div>
            <button onClick={() => dispatch({type: 'COOK_RICE'})}>밥하기</button>
            <button onClick={() => {
              if (count === 0) 
              dispatch({type: 'SERVE_RICE'})
            }}>배식하기</button>
        </div>
    </div>
  )
}
