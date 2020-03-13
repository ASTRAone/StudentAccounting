import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

  import store from '../../store/store';

import './menu-item.css';

export default class MenuApp extends Component {
    
    buttons = [
        { id:1, label: 'Заявки', name: 'заявки', path: '/menu' },
        { id:2, label: 'Одобренные', name: 'одобренные', path: '/good' },
        { id:3, label: 'Отклоненные', name: 'отклоненные', path: '/reject' },
        { id:4, label: 'На практике', name: 'практика', path: '/practik' },
        { id:5, label: 'Архив', name: 'архив', path: '/achive' },
        { id:6, label: 'Отчет', name: 'отчет', path: '/report' }
    ];

    render() {

        // handleClick = (path) => {
        //     history.push(path);
        // };

        const buttons = this.buttons.map((item) => {

            const { id, label, name, path } = item;

            return (
                    <Router>
                        <span key={ id } className="container-item">
                            <button 
                                type="button"
                                className="item"
                                //onClick={() => store.push(path)}
                                >
                                    <Link to={ path }>{ label }</Link>
                            </button> 

                            <label className="item-label"></label>
                    </span>
                </Router>
            );
        });

        return (
            <div className="menu-item">
                { buttons }
            </div>
        );
    };
};