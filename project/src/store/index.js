import {createStore, compose, applyMiddleware} from 'redux';
import createReducer from "../reducers";
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];

const composedEnhancers = compose(
    applyMiddleware(routerMiddleware(history)),
    ...enhancers
);

export const store = createStore(createReducer, initialState, composedEnhancers);


