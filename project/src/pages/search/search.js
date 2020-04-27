import React, { Component } from 'react';

import './search.css';

export default class Search extends Component {

    options = [
        { id: 1, label: "Backend" },
        { id: 2, label: "Frontend" },
        { id: 3, label: "Тестирование" },
        { id: 4, label: "Системный анализ" },
        { id: 5, label: "Системное администрирование" },
    ];

    render() {

        const options = this.options.map(({ id, label }) => {
            return (
                <option key={ id }>
                    { label }
                </option>
            );
        });

        return (
            <div className="search-menu">
                <input 
                    type="text" 
                    className="search-item" 
                    placeholder="Ключевое слово (ВУЗ)" />

                <input 
                    type="text" 
                    className="search-item datepicker-here"  
                    data-position="right top"
                    data-multiple-dates="2"
                    data-multiple-dates-separator=" / "
                    placeholder="Дата практики" />
                    
                <input 
                    type="text" 
                    className="search-item" 
                    placeholder="ФИО Иван Иванов" />

                <input 
                    name="city" 
                    list="cities" 
                    className="search-item"
                    placeholder="Направление"/>

                <datalist id="cities">
                    { options }
                </datalist>   

                <button className="btn btn-item">Найти</button>
            </div>
        );
    };
};