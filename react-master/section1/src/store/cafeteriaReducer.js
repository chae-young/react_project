import { ACTIONS } from "./cafeteriaConstants";

export function cafeteriaReducer(state,action) {
    switch(action.type) {
        case ACTIONS.ADD_RICE:
            return {...state, rice: state.rice + action.amount}
        case ACTIONS.REFILL_SOUP:
            return {...state, soup: state.soup + action.amount}
        case ACTIONS.CHANGE_SIDE:
            return {...state, side: action.newSide}
        default:
            return state // 알수없는 요청은 무시하고 현재 상태를 유지
    }
}