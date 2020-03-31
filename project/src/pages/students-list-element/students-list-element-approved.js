import React, { Component } from 'react';

import './students-list-element.css';
import noavatar from "../img/noavatar.png";

export default class StudentsListElementApproved extends Component {

    constructor() {
        super();
    }

    render(){

        const { id, date, SecondName, FirstName, Patronymic, Speciality, College, Faculty, PractiesBegining, PractiesEnding, Phone, Email } = this.props;

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
                <p className = "list__name">{ SecondName + " " + FirstName + " " + Patronymic }</p>
                <div className = "list__info">
                    <div className = "list__contacts__element">
                        <i className="fa fa-envelope"></i>
                        <p className = "list__contacts__text">{ Email }</p>
                    </div>
                    <div className = "list__contacts__element">
                        <i className ="fa fa-mobile list__contact-icon"></i>
                        <p className = "list__contacts__text">{ Phone }</p>
                    </div>
                </div>
                <div className = "list__info">
                    <div className = "list__info-element_institution">
                        <p className = "list__info-label">Учебное заведение:</p>
                        <p className = "list__info-text">{ College }</p>
                    </div>
                    <div className = "list__info-element_institution">
                        <p className = "list__info-label">Факультет, специальность:</p>
                        <p className = "list__info-text">{ Faculty }</p>
                    </div>
                </div>
                <div className = "list__info">
                    <div className = "list__info-element">
                        <p className = "list__info-label">Предполагаемые сроки практики:</p>
                        <p className = "list__info-text">{ PractiesBegining + " - " + PractiesEnding }</p>
                    </div>
                    <div className = "list__info-element">
                        <p className = "list__info-label">Желаемое направление деятельности:</p>
                        <p className = "list__info-text">{ Speciality }</p>
                    </div>
                </div>
                <div className = "list__buttons">
                    <i className="fa fa-arrow-left" title = "В архив"></i>
                    <i className ="fa fa-check-circle" title = "На практику"></i>
                </div>
            </div>
        );
    };
};