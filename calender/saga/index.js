import {all,fork, put,delay,takeLatest} from 'redux-saga/effects';
import {
    DAY_REQUEST,DAY_SUCCESS,DAY_FAIL,
    LIST_ADD_REQUEST,LIST_ADD_SUCCESS,LIST_ADD_FAIL,
} from '../reducers'

function* testAPI(){

}

function* day(action){
    try{
        yield delay(1000);
        yield put({
            type:DAY_SUCCESS,
            data:action.data,
        })
    }catch(err){
        yield put({
            type:DAY_FAIL,
            error:err.response.data,
        })
    }
}
function* listAdd(action){
    try{
        yield delay(1000);
        yield put({
            type:LIST_ADD_SUCCESS,
            data:action.data,
        })
    }catch(err){
        yield put({
            type:LIST_ADD_FAIL,
            error:err.response.data,
        })
    }
}
function* watchDay(){
    yield takeLatest(DAY_REQUEST,day);
}
function* watchListAdd(){
    yield takeLatest(LIST_ADD_REQUEST,listAdd);
}

export default function* rootSaga(){
    yield all([
        fork(watchDay),   
        fork(watchListAdd),   
    ])   
}