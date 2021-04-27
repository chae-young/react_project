const initialState = {
    nowDay:null,
}

export const DAY_REQUEST = 'DAY_REQUEST';

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case DAY_REQUEST:
            return{
                ...state,
                nowDay:action.data,
            }
        default:
            return state;
    }
}

export default reducer;