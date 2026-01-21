import * as types from './cafeteriaTypes' 

export const initialState = {
    rice: 20, 
    soup: 30, 
    mainMenu: '김치찌개'
}

export function officeCafeteriaReducer(state, action) {
    switch(action.type) {
        case types.ADD_RICE: 
            return { ...state, rice: state.rice + action.amount }
        case types.REFILL_SOUP: 
            return { ...state, soup: state.soup + action.amount }
        case types.CHANGE_MENU: 
            return { ...state, mainMenu: action.newMenu }
        default:
            return state
    }
}