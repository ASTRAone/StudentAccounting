import React, { Component } from 'react';

import './page-numbers.css';

export default class PageNumbers extends Component{
    render(){
        return(
            <div className = "btn-group page-numbers">
                <button className = "btn btn-secondary page">назад</button>
                <button className = "btn btn-secondary page">1</button>
                <button className = "btn btn-secondary page">2</button>
                <button className = "btn btn-secondary page">3</button>
                <button className = "btn btn-secondary page">4</button>
                <button className = "btn btn-secondary page">5</button>
                <button className = "btn btn-secondary page">6</button>
                <button className = "btn btn-secondary page">7</button>
                <button className = "btn btn-secondary page">8</button>
                <button className = "btn btn-secondary page">след</button>


            </div>
        )
    };
    
}