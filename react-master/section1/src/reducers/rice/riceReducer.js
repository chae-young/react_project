
import * as types from './riceTypes'

// 밥 재고 관련된것만 전문적으로 관리하는 리듀서
export const initialRiceState = {
    stock: 20,
    warning: ''
}

export function riceReducer(state,action) {
    switch(action.type) {
        case types.ADD_RICE:
            return {...state, stock: state.stock + 1}
        case types.REMOVE_RICE:
            return {...state, stock: state.stock > 0 ? state.stock - 1 : 0}
        case types.SET_RICE_WARNING:
            console.log(action.payload)
            return { ...state, warning: action.payload}
        default:
            return state
    }
}