import {ACTIONS} from './cafeteriaConstants'

export function addRice(amount) {
    return {
        type: ACTIONS.ADD_RICE,
        amount
    }
}
export function refillSoup(amount) {
    return {
        type: ACTIONS.REFILL_SOUP,
        amount
    }
}
export function changeSide(newSide) {
    return {
        type: ACTIONS.CHANGE_SIDE,
        newSide
    }
}