import { all } from 'redux-saga/effects';
import { applications } from './applications';

export default function* rootSaga(arguments) {
    yield all([applications(arguments)])
} 