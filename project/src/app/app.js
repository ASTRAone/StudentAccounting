import React, { Component } from 'react';

import AppHeader from '../app-header';
import MenuItem from '../menu-item';
import Search from '../search';
import Filter from '../filter';
import Tools from '../tools';
import StudentsList from '../students-list';

import './app.css';


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

                <StudentsList />
            </div>
        );
    };
};