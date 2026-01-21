import * as types from './cafeteriaTypes'

export const addRice = (amount) => ({
    type: types.ADD_RICE,
    amount
})
export const refillSoup = (amount) => ({
    type: types.REFILL_SOUP,
    amount
})
export const changeMenu = (newMenu) => ({
    type: types.CHANGE_MENU,
    newMenu
})