import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {getHistory} from "../store";
import applications from './applications';

const reducers = {applications};

export default (history) => combineReducers({...reducers});
const history = getHistory();


export const createReducer = () => {
    return combineReducers({
        router: connectRouter(history),
        ...reducers
    })
};
