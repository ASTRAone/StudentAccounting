import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import AppHeader from '../app-header';
import MenuItem from '../menu-item';
import Search from '../search';
import Filter from '../filter';
import Tools from '../tools';
import StudentsList from '../students-list';
import PageNumbers from '../page-numbers';
import Report from '../report';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import './app.css';

export const history = createBrowserHistory();

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <AppHeader />

                <div className="app-menu">
                    <MenuItem />
                </div>

                <div className="app-search">
                    <Search />
                </div>

                <div className="app-filter">
                    <Filter />
                    <Tools />
                </div>
        
                <Router history={history}>
        
                    <Switch>
                        <Route path="/menu">
                            <Report />
                        </Route>

                    </Switch>

                </Router>

                <StudentsList />
                <PageNumbers />
            </div>
        );
    };
};