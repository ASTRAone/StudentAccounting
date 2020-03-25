import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import AppHeader from '../app-header';
import MenuItem from '../menu-item';

import ApplicationsPage from '../../page/applicationsPage';
import ApprovedPage from '../../page/approvedPage';
import RejectPage from '../../page/rejectPage';
import PractikPage from '../../page/practikPage';
import AchivePage from '../../page/achivePage';
import ReportPage from '../../page/reportPage';

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
                    <MenuItem history={this.props.history} />
                </div>
                <Route path="/applications" render={props => <ApplicationsPage {...props} />} />
                <Route path="/approved" render={props => <ApprovedPage {...props} />} />    
                <Route path="/reject" render={props => <RejectPage {...props} />} />    
                <Route path="/practik" render={props => <PractikPage {...props} />} /> 
                <Route path="/achive" render={props => <AchivePage {...props} />} />
                <Route path="/report" render={props => <ReportPage {...props} />} />        
            </div>
        );
    };
};

