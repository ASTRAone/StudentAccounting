import { all } from 'redux-saga/effects';
import applications from './applications';

export default function* rootSaga(extraArguments) {
    yield all([applications(extraArguments)])
}
