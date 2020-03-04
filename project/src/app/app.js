import React, { Component } from 'react';

import AppHeader from '../app-header';
import MenuItem from '../menu-item';

import './app.css';


export default class App extends Component {

    render() {
        return (
            <div className="app">
                <AppHeader />

            <div className="app-menu">
                <MenuItem />
            </div>

            </div>
        );
    };
};