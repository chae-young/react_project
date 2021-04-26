import {all,fork, put, takeLatest} from 'redux-saga/effects';
import {TEST_REQUEST} from '../reducers'

function* testAPI(){

}

function* test(action){
    try{
        yield put({
            type:TEST_REQUEST,
        })
    }catch(err){
        yield put({
            type:TEST_FAIL,
            error:err.response.data,
        })
    }
}

function* watchTest(){
    yield takeLatest(TEST_REQUEST,test);
}

export default function* rootSaga(){
    yield all([
        //fork(userSaga),   
    ])   
}