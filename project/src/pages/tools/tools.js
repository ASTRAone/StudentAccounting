import React, { Component } from 'react';

import './tools.css';

export default class Tools extends Component {

   

    render() {

        const {visibleDelBtn, onShowModalWindowAdd} = this.props;

        return (
            <div className="tools">
                <i className="fa fa-plus-circle" onClick={onShowModalWindowAdd}></i>
                <i className="fa fa-trash" onClick={visibleDelBtn}></i>
            </div>
        );
    };
};