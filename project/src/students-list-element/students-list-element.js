import React, { Component } from 'react';

import './students-list-element.css';
import noavatar from "../img/noavatar.png";

export default class StudentsListElement extends Component {

    render(){
        return(
            <ul className = "list-element">
                <div className = "list-element-identificator">
                    <p className = "list-element-identificator__label">№</p>
                    <p className = "list-element-identificator__number">1</p>
                </div>
                <div className = "list-element-date">
                    <p className = "list-element-date__label">Дата заявки</p>
                    <p className = "list-element-date__value">28.01.2020</p>
                </div>
                <img src = {noavatar} className = "profile-pic" />
                <p className = "name">Иванов Иван Иванович</p>
                <div className = "contacts">
                    <div className = "contacts__element">
                        <i class="fa fa-envelope"></i>
                        <p className = "contacts__text">ivanov@mail.ru</p>
                    </div>
                    <div className = "contacts__element">
                        <i className ="fa fa-mobile contact-icon"></i>
                        <p className = "contacts__text">89543892398</p>
                    </div>
                </div>
                <div className = "contacts">
                    <div className = "info-element">
                        <p className = "info-label">Учебное заведение:</p>
                        <p className = "info__text">КГУ</p>
                    </div>
                    <div className = "info-element">
                        <p className = "info-label">Факультет, специальность:</p>
                        <p className = "info__text">ИАСТ</p>
                    </div>
                </div>
                <div className = "contacts">
                    <div className = "info-element">
                        <p className = "info-label">Предполагаемые сроки практики:</p>
                        <p className = "info__text">1.07.2019 - 17.07.2019</p>
                    </div>
                    <div className = "info-element">
                        <p className = "info-label">Желаемое направление деятельности:</p>
                        <p className = "info__text">Разработка</p>
                    </div>
                </div>
                <div className = "buttons">
                <i className ="fa fa-check-circle"></i>
                <i className ="fa fa-ban"></i>
                </div>
            </ul>
        );
    };

}