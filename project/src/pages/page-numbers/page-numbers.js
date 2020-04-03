import React, { Component } from 'react';

import './page-numbers.css';

export default class PageNumbers extends Component{

    constructor(props) {
        super(props);

        this.state = {
            numbersListStidents: this.props.numbers
        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.numbersListStidents !== this.props.numbers) {
            this.setState({
                numbersListStidents: this.props.numbers
            })
        }
    }

    render(){

        // счетчик для кнопок
        let number = 1;
        let clsBtn = "btn btn-secondary page none";

        if (this.state.numbersListStidents.length > 10) {
            clsBtn = "btn btn-secondary page";
        }

        const buttons = this.state.numbersListStidents.map((item, index) => {
            if (index % 10 === 0) {     
                return (
                    <button className = {clsBtn}>{number++}</button>
                );
            }
        });

        return(
            <div className = "btn-group page-numbers">
                <button className = {clsBtn}>назад</button>
                {buttons}
                <button className = {clsBtn}>след</button>
            </div>
        )
    };   
}