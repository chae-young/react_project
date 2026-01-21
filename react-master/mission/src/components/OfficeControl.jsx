import React, { useState } from 'react'
import { useReducer } from 'react'

function officeControlReducer(state, action) {
  switch(action.type) {
    case 'CHANGE_TEMP':
      return {
        ...state,
        temperature: action.payload.temperature
      }
    case 'CHANGE_HUMIDITY':
      return {
        ...state,
        humidity: action.payload.humidity
      }
    default:
      return state
  }
}

export default function OfficeControl() {
  const initialState = {
    temperature: 22,
    humidity: 45
  }
  const [value, setValue] = useState({
    temperature: '',
    humidity: ''
  })
  const [state, dispatch] = useReducer(officeControlReducer, initialState)

  const handleChangeInput = (e) => {
    switch(e.target.name) {
      case 'temp':
        return setValue(prev => ({
          ...prev,
          temperature: e.target.value
        }))

      case 'hum':
        return setValue(prev => ({
          ...prev,
          humidity: e.target.value
        }))
      default:
        return
    }

  }

  return (
    <div>
        <h1>SMART OFFICE 제어 시스템 </h1>
        <p>현재온도: {state.temperature}°C | 현재습도: {state.humidity}°C</p>
        <div>
            <input type="number" placeholder='온도 입력' name="temp" onChange={handleChangeInput} value={value.temperature}/> 
            <button onClick={() => dispatch({
              type: 'CHANGE_TEMP',
              payload: {temperature: value.temperature}
            })}>온도 설정하기</button>
        </div>
        <div>
            <input type="number" placeholder='습도 입력' name="hum" onChange={handleChangeInput} value={value.humidity}/> 
            <button onClick={(() => dispatch({
              type: 'CHANGE_HUMIDITY',
              payload: {humidity: value.humidity}
            }))}>습도 설정하기</button>
        </div>        
    </div>
  )
}
