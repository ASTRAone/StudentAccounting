import React, { Component } from 'react';

import './menu-item.css';

export default class MenuApp extends Component {

    buttons = [
        { id:1, label: 'Заявки', name: 'заявки' },
        { id:2, label: 'Одобренные', name: 'одобренные' },
        { id:3, label: 'Отклоненные', name: 'отклоненные' },
        { id:4, label: 'На практике', name: 'практика' },
        { id:5, label: 'Архив', name: 'архив' }
    ];

    render() {

        const buttons = this.buttons.map((item) => {

            const { id, label, name } = item;

            return (
                <span key={ id }>
                    <button 
                        type="button"
                        className="item">

                        { label }
                    </button>
                    <label className="item-label"></label>
                </span>
            )
        });

        return (
            <div className="menu-item">
                { buttons }
            </div>
        );
    };
};