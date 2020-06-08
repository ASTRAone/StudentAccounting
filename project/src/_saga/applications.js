import { takeLatest, put, call, delay } from "redux-saga/effects";
import {getStudentsListRequest, successGetStudentsList, postCreateNewStudent, sendPostNewStudent,
        postFindStudent, successFindStudent} from "../_actions/applications";
import {item} from "../_stab";

import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'https://localhost:44314/api/Student',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// Получение данных из БД
function* getStudentsList(api, action) {
    try {
        console.warn('[saga ===> getStudentsList ===> ]');
        //yield put(changeLoading(true));

        
        const apiRes = yield call(() => postman.get(`/GetStudentsByStatus?status=${action.payload}`));

        // console.log(action.payload)
        
        // const stabStudentList = item
        yield put(successGetStudentsList(apiRes));
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

// Добавление нового студента
function* createNewStudent(api, action) {
    try {
        console.warn('[saga ===> createNewStudent ===> ]');
        //yield put(changeLoading(true));

        
        const apiRes = yield call(() => postman.get(`/CreateNewStudent=${action.payload}`));

        // console.log(action.payload)
        
        // const stabStudentList = item
        yield put(sendPostNewStudent(apiRes));
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


// Поиск студента



function* headerSaga(ea) {
  yield takeLatest(getStudentsListRequest().type, getStudentsList, ea);

  // Добавление студента
  yield takeLatest(postCreateNewStudent().type, createNewStudent, ea);
}

export default headerSaga;
