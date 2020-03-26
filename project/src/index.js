import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';


import sagas from './_saga';

import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {createReducer} from "./reducers";

import {getHistory} from "./store";
import App from "./pages/app/app";
import {logger} from "redux-logger";
//import {ConnectedRouter} from "connected-react-router";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(createReducer(),initialState, compose(applyMiddleware(logger,sagaMiddleware)));
const api ={};
//const history = getHistory();

sagaMiddleware.run(sagas, api);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
