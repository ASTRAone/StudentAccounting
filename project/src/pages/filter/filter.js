import React, { Component } from 'react';

import './filter.css';

export default class Filter extends Component {
    render() {

        const { onSortNameStudentList, onSortDataStudentList, sortStatusDate, sortStatusName } = this.props;

        let arrowDate = <span>&#9660;</span>
        let arrowName = <span>&#9660;</span>

        if (sortStatusDate === true) {
            arrowDate = <span>&#9650;</span>
        }

        if (sortStatusName === true) {
            arrowName = <span>&#9650;</span>
        }

        return (
            <div className="filter">
                <p className="filter-text">Сортировать :</p>
                <div className="filter-items">
                    <button 
                        className="filter-btn btn btn-primary"
                        onClick={onSortDataStudentList}>
                            Дата
                        {arrowDate}
                    </button>
                    <button 
                        className="filter-btn btn btn-primary"
                        onClick={onSortNameStudentList}>
                            Имя
                        {arrowName}
                    </button>
                </div>
            </div>  
        );
    };
};