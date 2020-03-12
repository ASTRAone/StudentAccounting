import React, { Component } from 'react';

import './filter.css';

export default class Filter extends Component {

    render() {
        return (
            <div className="filter">
                <p className="filter-text">Сортировать :</p>
                <div className="filter-items">
                    <button className="filter-btn btn btn-primary">
                        Дата
                        <span>&#9660;</span>
                    </button>
                    <button className="filter-btn btn btn-primary">
                        Имя
                        <span>&#9660;</span>
                    </button>
                </div>
            </div>  
        );
    };
};