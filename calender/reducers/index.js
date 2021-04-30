import moment from 'moment';

const initialState = {
    dayLoading:false,
    dayDone:false,
    dayFail:null,
    listAddLoading:false,
    listAddDone:false,
    listAddFail:null,    
    nowDay:null,
    dayList:[
        {
            month:null,
            day:null,
            text:[],
            desc:[],
        }
    ],
}

export const DAY_REQUEST = 'DAY_REQUEST';
export const DAY_SUCCESS = 'DAY_SUCCESS';
export const DAY_FAIL = 'DAY_FAIL';

export const LIST_ADD_REQUEST = 'LIST_ADD_REQUEST';
export const LIST_ADD_SUCCESS = 'LIST_ADD_SUCCESS';
export const LIST_ADD_FAIL = 'LIST_ADD_FAIL';

export const listAddAction = (data)=>({
    type:LIST_ADD_REQUEST,
    data,   
})

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case DAY_REQUEST:
            return{
                ...state,
                dayLoading:true,
                dayDone:false,
                nowDay:action.data,
            }
        case DAY_SUCCESS:
            return{
                ...state,
                
                dayLoading:false,
                dayDone:true,                                
            }
        case DAY_FAIL:
            return{
                ...state,
                dayLoading:false,
                dayFail:action.error,
            }     
        case LIST_ADD_REQUEST:
            return{
                ...state,
                listAddLoading:true,
                listAddDone:false,
            }
        case LIST_ADD_SUCCESS:{
            let month = action.data.nowDay.date.month();
            let dayList;
            if(!state.dayList[0].month){
                dayList = [{
                    month:month,
                    day:action.data.nowDay.date.get('date'),
                    text:action.data.text,
                    desc:action.data.desc,
                }]
            }else{
                dayList = [...state.dayList,{
                    month:month,
                    day:action.data.nowDay.date.get('date'),
                    text:action.data.text,
                    desc:action.data.desc,
                }]
            }            
            return{
                ...state,
                listAddLoading:false,
                listAddDone:true,   
                dayList,   
                //nowDay:null,          
            }
        }
        case LIST_ADD_FAIL:
            return{
                ...state,
                listAddLoading:false,
                listAddFail:action.error,
            }                                
        default:
            return state;
    }
}

export default reducer;