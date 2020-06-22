import React, { Component } from 'react';

import './app-header.css';

import {connect} from 'react-redux';
import { signOut } from '../../_actions/applications'

class AppHeader extends Component {

    // Выход из системы
    outSistem = () => {
        this.props.signOut();
        this.props.onCloeseRole();
    }
    render() {

        const { role } = this.props

        return (
            <div className="container-app-header">
                <h1 className="app-header">Сервис внутреннего учета студентов-практикантов</h1>
                <div className="app-header__info">
                    <label className="app-header__text">{role}</label>
                    <i onClick={this.outSistem} className="fa fa-times"></i>
                </div> 
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        signOut
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(AppHeader);
