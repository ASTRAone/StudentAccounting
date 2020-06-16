import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import AppHeader from '../app-header';
import MenuItem from '../menu-item';

import ApplicationsPage from '../../page/applicationsPage';
import ApprovedPage from '../../page/approvedPage';
import RejectPage from '../../page/rejectPage';
import PractikPage from '../../page/practikPage';
import AchivePage from '../../page/achivePage';
import ReportPage from '../../page/reportPage';

import LoginForm from '../login-form';

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

    constructor(props) {
        super(props);

        this.state = {
            role: '',
            isAuthorization: false
        }
    }

    componentDidMount() {
        const role = localStorage.getItem('role');
        const isAuthorization = localStorage.getItem('isAuthorization');
        this.setState({ 
            role: role, 
            isAuthorization: isAuthorization
        });
      };

    // Распределение ролей
    onGenerateRole = (role) => {
        switch(role) {
            case role : return '/applications'
            case role : return '/applications'
            case role : return '/applications'

            default : return '/'
        }
    };

    // Вход в систему
    onChangeRoles = (value) => {
        let path = this.onGenerateRole(value);

        window.location.assign(`http://localhost:3000/applications`);
        window.localStorage.setItem('role', value)
        window.localStorage.setItem('isAuthorization', true)
    };

    // Выход из системы
    onCloeseRole = () => {
        window.localStorage.clear();
        window.location.assign(`http://localhost:3000/`);
    }

    render() {
        return (
            <div className="app">
                {this.state.isAuthorization === 'true' ? 
                    <div>
                        <AppHeader
                            role={this.state.role}
                            onCloeseRole={this.onCloeseRole}/>
                        <div className="app-menu">
                            <MenuItem history={this.props.history}/>
                        </div>
                    </div> : null}
                <Switch>
                    <Route path="/applications" render={props => <ApplicationsPage {...props} role={this.state.role} />}/>
                    <Route path="/approved" render={props => <ApprovedPage {...props} role={this.state.role} /> } />
                    <Route path="/reject" render={props => <RejectPage {...props} role={this.state.role} />} />
                    <Route path="/practik" render={props => <PractikPage {...props} role={this.state.role} />}/>
                    <Route path="/achive" render={props => <AchivePage {...props} role={this.state.role} />}/>
                    <Route path="/report" render={props => <ReportPage {...props} role={this.state.role} />}/>
                    <Route path="/" render={props => <LoginForm {...props} onChangeRoles={this.onChangeRoles}/>} />
                </Switch>
            </div>
        );
    };
};

