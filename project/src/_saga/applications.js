import { takeLatest, put, call, delay } from "redux-saga/effects";
import {getStudentsListRequest, successGetStudentsList, postCreateNewStudent, sendPostNewStudent,
        postFindStudent, successFindStudent, deleteStudent, successDeleteStudent,
        updateInfoStudent, successUpdateInfoStudent, postLogin, successPostLogin,
        addCurator, successAddCurator} from "../_actions/applications";
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
        
        // const stabStudentList = item
        yield put(successGetStudentsList(apiRes.data));
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

        console.log(action.payload)

        const apiRes = yield call(() => postman.post("/CreateNewStudent", action.payload));

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

// Удаление студента
function* deleteStudentCard(api, action) {
    try {
        console.warn('[saga ===> deleteStudentCard ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.delete(`/DeleteStudent?id=${action.payload}`));

        // const stabStudentList = item
        yield put(successDeleteStudent(apiRes));
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
function* findStudents(api, action) {
    try {
        console.warn('[saga ===> findStudents ===> ]');
        //yield put(changeLoading(true));

        console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/FindStudents", action.payload));
      
        // const stabStudentList = item
        yield put(successFindStudent(apiRes));
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

// Обновление информации о студенте
function* updateInfo(api, action) {
    try {
        console.warn('[saga ===> updateInfo ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.put("/FindStudents", action.payload));

        // const stabStudentList = item
        yield put(successUpdateInfoStudent(apiRes));
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

// Вход в систему
function* getLoggingSistem(api, action) {
    try {
        console.warn('[saga ===> getLoggingSistem ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Account/LogIn", action.payload));

        // const stabStudentList = item
        yield put(successPostLogin(apiRes));
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

// Добавление куратора
function* addCuratorPractic(api, action) {
    try {
        console.warn('[saga ===> addCuratorPractic ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/AddStudentMentor", action.payload));

        // const stabStudentList = item
        yield put(successAddCurator(apiRes));
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
  // Удаление студента
  yield takeLatest(deleteStudent().type, deleteStudentCard, ea);
  // Добавление студента
  yield takeLatest(postCreateNewStudent().type, createNewStudent, ea);
  // Поиск студента
  yield takeLatest(postFindStudent().type, findStudents, ea);   
  // Обновление информации о студенте
  yield takeLatest(updateInfoStudent().type, updateInfo, ea);   
  // Вход в систему
  yield takeLatest(postLogin().type, getLoggingSistem, ea);   
  // Добавление куратора
  yield takeLatest(addCurator().type, addCuratorPractic, ea);   
}

export default headerSaga;
