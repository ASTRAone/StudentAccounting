import React, { Component } from 'react';

import MenuItems from '../menu-items';
import AppHeader from '../app-header';

import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className="app">
            <AppHeader />

            <div className="app-menu-items">
                <MenuItems />
            </div>
                

            </div>
        );
    }
}