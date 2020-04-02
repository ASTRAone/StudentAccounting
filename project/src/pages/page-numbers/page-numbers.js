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
    // почитать и сделать 

    render(){

        let clsBtn = "btn btn-secondary page";

        if (this.state.numbersListStidents.length === 1) {
            clsBtn += " none";
        }

        const buttons = this.state.numbersListStidents.map((item, index) => {
            return (
                <button className = {clsBtn}>{index + 1}</button>
            );
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