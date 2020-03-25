import { takeLatest, put, call, delay } from "redux-saga/effects";

function* getStudentsList(api, action) {
    try {
        console.warn('[saga ===> getStudentsList ===> ]');
        //yield put(changeLoading(true));
        //const apiRes = yield call(api.routes.getInitialStages, action.payload);
        yield put(successGetStudentsList('successGetStudentsList'));
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