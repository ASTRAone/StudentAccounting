import React, { Component } from 'react';

import './students-list-element.css';
import noavatar from "../img/noavatar.png";

export default class StudentsListElement extends Component {

    constructor() {
        super();
    }

    render(){

        const { idx, date, SecondName, FirstName, Patronymic, Speciality, College, Faculty, PractiesBegining, PractiesEnding, Phone, Email, buttons } = this.props;

        return(
            <div className="list-element">
                <div className="list-element__our">
                    <div className = "list-element-identificator">
                        <p className = "list-element-identificator__label">№</p>
                        <p className = "list-element-identificator__number">{ idx + 1 }</p>
                    </div>
                    <div className = "list-element-date">
                        <p className = "list-element-date__label">Дата заявки</p>
                        <p className = "list-element-date__value">{ date }</p>
                    </div>
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
                    {buttons.map((item, index) => {
                        return (
                            <label className="list__buttons-our" key={index}>
                                <i className ={`fa ${item.icon}`}></i>
                                <label className="list__buttons-text">{item.label}</label>
                            </label>
                        );           
                    })}
                </div>
            </div>
        );
    };
};