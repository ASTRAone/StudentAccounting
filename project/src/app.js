import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import AppHeader from './pages/app-header/index';
import MenuItem from './pages/menu-item/index';
import Search from './pages/search/index';
import Filter from './pages/filter/index';
import Tools from './pages/tools/index';
import StudentsList from './pages/students-list/index';
import PageNumbers from './pages/page-numbers/index';


import Report from './pages/report/index';

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
                <AppHeader/>

                <div className="app-menu">
                    <MenuItem history={this.props.history}/>
                </div>

                <div className="app-search">
                    <Search/>
                </div>

                <div className="app-filter">
                    <Filter/>
                    <Tools/>
                </div>
                <Route path="/page1" render={props => <Report {...props} />} />
                <Route path="/page2" render={props => <StudentsList {...props} />} />

                <StudentsList/>
                <PageNumbers/>
            </div>
        );
    };
};
