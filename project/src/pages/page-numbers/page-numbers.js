import React, { Component } from 'react';

import './page-numbers.css';

export default class PageNumbers extends Component{

    constructor(props) {
        super(props);

        this.state = {
            totalCount: this.props.totalCount,
            count: this.props.count,
            activePage: this.props.activePage  
        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.totalCount !== this.props.totalCount) {
            this.setState({
                totalCount: this.props.totalCount
            });
        }

        if (this.state.count != this.props.count) {
            this.setState({
                count: this.props.count
            });
        }

        if (this.state.activePage != this.props.activePage) {
            this.setState({
                activePage: this.props.activePage
            });
        }
    }

    render(){
        // счетчик для кнопок
        let number = 1;
        let clsBtn = "btn btn-secondary page none";

        if (this.state.totalCount.length > this.props.count) {
            clsBtn = "btn btn-secondary page";
        }

        const buttons = this.state.totalCount.map((item, index) => {
            if (index % this.props.count === 0) {     
                return (
                    <button 
                        className = {clsBtn} 
                        onClick={() => this.props.onChange(index + 1)}>
                            {number++}
                    </button>
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