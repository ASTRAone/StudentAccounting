import { takeLatest, put, call, delay } from "redux-saga/effects";
import {getStudentsListRequest, successGetStudentsList, postCreateNewStudent, sendPostNewStudent,
        postFindStudent, successFindStudent, deleteStudent, successDeleteStudent,
        updateInfoStudent, successUpdateInfoStudent, postLogin, successPostLogin,
        addCurator, successAddCurator , exportToExcel, successExportToExcel, practicToExcel,
        successPracticToExcel, addStudentPracticComment,
        successAddStudentPracticComment, studentCardReport, successStudentCardReport, updatePractic,
        successUpdatePractic} from "../_actions/applications";
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

// Экспорт в Excel
function* exportReportToExcel(api, action) {
    try {
        console.warn('[saga ===> exportReportToExcel ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Practic/ExportToExcel", action.payload));

        // const stabStudentList = item
        yield put(successExportToExcel(apiRes));
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

// Экспортировать практику в Excel
function* exportPracticToExcel(api, action) {
    try {
        console.warn('[saga ===> exportPracticToExcel ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Reports/PracticToExcel", action.payload));

        // const stabStudentList = item
        yield put(successPracticToExcel(apiRes));
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

// Добавить комментарий к практике
function* addPracticComment(api, action) {
    try {
        console.warn('[saga ===> addPracticComment ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/AddStudentPracicComment", action.payload));

        // const stabStudentList = item
        yield put(successAddStudentPracticComment(apiRes));
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

// Отчет по карточке
function* makeStudentCardReport(api, action) {
    try {
        console.warn('[saga ===> makeStudentCardReport ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/StudentCardReport", action.payload));

        // const stabStudentList = item
        yield put(successStudentCardReport(apiRes));
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

// Обновить практику
function* updateStudentPractic(api, action) {
    try {
        console.warn('[saga ===> updateStudentPractic ===> ]');
        //yield put(changeLoading(true));

        // console.log(action)
        // console.log(api)

        const apiRes = yield call(() => postman.post("/Practic/UpdatePractic", action.payload));

        // const stabStudentList = item
        yield put(successUpdatePractic(apiRes));
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
  // Экспорт в Excel
  yield takeLatest(exportToExcel().type, exportReportToExcel, ea);
  // Экспортировать практику в Excel
  yield takeLatest(practicToExcel().type, exportPracticToExcel, ea);
  // Добавить комментарий к практике
  yield takeLatest(addStudentPracticComment().type, addPracticComment, ea);
  // Отчет по карточке
  yield takeLatest(studentCardReport().type, makeStudentCardReport, ea);
  // Обновить практику
  yield takeLatest(updatePractic().type, updateStudentPractic, ea); 
}

export default headerSaga;
