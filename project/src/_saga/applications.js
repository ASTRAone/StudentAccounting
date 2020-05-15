import { takeLatest, put, call, delay } from "redux-saga/effects";
import {getStudentsListRequest, successGetStudentsList} from "../_actions/applications";
import {item} from "../_stab";

import axios from 'axios';

function* getStudentsList(api, action) {
    try {
        console.warn('[saga ===> getStudentsList ===> ]');
        //yield put(changeLoading(true));

        // Обращение к БД
        // const apiRes = yield call(() => axios("http://umorili.herokuapp.com/api/get?site=bash.im&name=bash&num=100")
        //                                         .then(response => (response.data)), 
        // action.payload);
        
        const stabStudentList = item
        yield put(successGetStudentsList(stabStudentList));
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        // console.error('[getStudentsList saga1] error', e.message);
        // yield delay(3000);
        // yield put(clearError(e));
    }
}



function* headerSaga(ea) {
  yield takeLatest(getStudentsListRequest().type, getStudentsList, ea);
}

export default headerSaga;
