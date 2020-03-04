import React, { Component } from 'react';

import './search.css';

export default class Search extends Component {

    render() {
        return (
            <div className="search-menu">
                <input 
                    type="text" 
                    className="search-item" />

                <input 
                    type="data" 
                    className="search-item" />
                    
                <input 
                    type="data" 
                    className="search-item" />

                <input 
                    type="data" 
                    className="search-item" />

                <button className="btn btn-item">Найти</button>
            </div>
        );
    };
};