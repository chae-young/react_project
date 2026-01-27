export const initialAlert = {
    message: '',
    status: false
}

export function AlertReducer(state, action) {
    switch(action.type) {
        case 'ADD_TOAST': 
        console.log(action.message)
            return {
                ...state,
                status: true,
                message: action.message
            }
        case 'REMOVE_TOAST':
            return {
                ...state,
                status: false,
                message: ''
            }
        default:
            return state
    }
}