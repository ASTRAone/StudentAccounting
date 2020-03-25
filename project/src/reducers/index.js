import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import applications from './applications';

const reducers = {applications};

export default (history) => combineReducers({
    router: connectRouter(history),
    ...reducers
});
