import React, { Component } from 'react';

import './filter.css';

export default class Filter extends Component {
    render() {


        const { onSortNameStudentList, onSortDataStudentList } = this.props;

        return (
            <div className="filter">
                <p className="filter-text">Сортировать :</p>
                <div className="filter-items">
                    <button 
                        className="filter-btn btn btn-primary"
                        onClick={onSortDataStudentList}>
                            Дата
                        <span>&#9660;</span>
                    </button>
                    <button 
                        className="filter-btn btn btn-primary"
                        onClick={onSortNameStudentList}>
                            Имя
                        <span>&#9660;</span>
                    </button>
                </div>
            </div>  
        );
    };
};