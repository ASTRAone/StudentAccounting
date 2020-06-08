import React from 'react';

import './app-header.css';

const AppHeader = ({ role, onCloeseRole}) => {

    return (
        <div className="container-app-header">
            <h1 className="app-header">Сервис внутреннего учета студентов-практикантов</h1>
            <div className="app-header__info">
                <label className="app-header__text">{role}</label>
                <i onClick={onCloeseRole} className="fa fa-times"></i>
            </div>
                
        </div>

    );
};

export default AppHeader;