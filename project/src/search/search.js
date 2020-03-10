import React, { Component } from 'react';

import './search.css';

export default class Search extends Component {

    options = [
        { id: 1, label: "Naples" },
        { id: 2, label: "London" },
        { id: 3, label: "Berlin" },
        { id: 4, label: "New York" },
        { id: 5, label: "Frattamaggiore" },
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