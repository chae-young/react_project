import React from 'react'
import { useReducer } from 'react'

/**
 * 
 * 1인당 최대 4좌석까지만 예매 가능. 
 * vip등급은 20%할인
 */

const ACTION_TYPES = {
  TOGGLE_SEAT: 'TOGGLE_SEAT',
  TOGGLE_VIP: 'TOGGLE_VIP'
}

const initialState = {
  seats: [],
  grade: false,
  totalAmount: 0,
  prevPrice: 0,
  price: 15000 
}

function ticketReducer(state, action) {
  switch(action.type) {
    case ACTION_TYPES.TOGGLE_SEAT: {
      // 이미 선택된 좌석이라면? 해당 좌석 제거
      if (state.seats.includes(action.payload)) {
        const removeSeat = state.seats.filter((seat) => seat != action.payload)
        return {
          ...state,
          seats: removeSeat,
          totalAmount: state.grade ? state.totalAmount - (state.price * 0.8) : state.totalAmount - state.price
        }
      }
      // 최대 4개 제한 규칙
      if (state.seats.length >= 4) {
        alert('최대 4개까지 선택 가능합니다.')
        return state
      }

      const newSeats = [...state.seats, action.payload]
      return {
        ...state,
        seats: newSeats,
        totalAmount: state.grade ? (state.price * newSeats.length) * 0.8 : state.totalAmount + state.price
      }
    }
    case ACTION_TYPES.TOGGLE_VIP: {
      const curGrade = !state.grade

      if(curGrade) {
        return {
          ...state,
          grade: curGrade,
          totalAmount: state.totalAmount * 0.8
        }
      }

      return {
        ...state,
        grade: curGrade,
        totalAmount: state.price * state.seats.length
      }
    }
    default:
      return state
  }
}

export default function SmartTicket() {
  const [state, dispatch] = useReducer(ticketReducer, initialState)
  const seatData = Array.from({length: 5}, (_, idx) => 'A'+ (idx+1))


  return (
    <div>
        <h1>스마트 티켓 예매 시스템</h1>
        <button 
          onClick={() => 
            dispatch({
              type: ACTION_TYPES.TOGGLE_VIP
            })}>
            일반 회원(등급 전환)
          </button>
        <div>
          <h2>좌석 선택 (최대 4석)</h2>
          {seatData.map((seat, idx) => 
            <button key={seat + idx} onClick={
              () => dispatch({
              type: ACTION_TYPES.TOGGLE_SEAT,
              payload: seat
            })}>
              {seat}
            </button>)}
        </div>
        <div>
          <div>선택된 좌석: {state.seats}</div>
          <div>사용자 등급: {state.grade ? 'VIP' : '일반'}</div>
        </div>
        
        <div>최종 결제 금액: {state.totalAmount.toLocaleString()}원</div>
    </div>
  )
}


