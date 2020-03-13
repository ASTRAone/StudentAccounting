import React, { Component } from 'react';

import './students-list-element.css';
import noavatar from "../img/noavatar.png";

export default class StudentsListElement extends Component {

    constructor() {
        super();

        // this.state = {
        //     data: this.props
        // }
    }

    render(){

        const { id, date, SecondName } = this.props;

        return(
            <div className="list-element">
                <div className = "list-element-identificator">
                    <p className = "list-element-identificator__label">№</p>
                    <p className = "list-element-identificator__number">{ id }</p>
                </div>
                <div className = "list-element-date">
                    <p className = "list-element-date__label">Дата заявки</p>
                    <p className = "list-element-date__value">{ date }</p>
                </div>
                <img src = { noavatar } className = "list__profile-pic" />
                <p className = "list__name">Иванов Иван Иванович</p>
                <div className = "list__info">
                    <div className = "list__contacts__element">
                        <i className="fa fa-envelope"></i>
                        <p className = "list__contacts__text">ivanov@mail.ru</p>
                    </div>
                    <div className = "list__contacts__element">
                        <i className ="fa fa-mobile contact-icon"></i>
                        <p className = "list__contacts__text">89543892398</p>
                    </div>
                </div>
                <div className = "list__info">
                    <div className = "list__info-element">
                        <p className = "list__info-label">Учебное заведение:</p>
                        <p className = "list__info-text">КГУ</p>
                    </div>
                    <div className = "list__info-element">
                        <p className = "list__info-label">Факультет, специальность:</p>
                        <p className = "list__info-text">ИАСТ</p>
                    </div>
                </div>
                <div className = "list__info">
                    <div className = "list__info-element">
                        <p className = "list__info-label">Предполагаемые сроки практики:</p>
                        <p className = "list__info-text">1.07.2019 - 17.07.2019</p>
                    </div>
                    <div className = "list__info-element">
                        <p className = "list__info-label">Желаемое направление деятельности:</p>
                        <p className = "list__info-text">Разработка</p>
                    </div>
                </div>
                <div className = "list__buttons">
                    <i className ="fa fa-check-circle"></i>
                    <i className ="fa fa-ban"></i>
                </div>
            </div>
        );
    };
};