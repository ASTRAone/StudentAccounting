import React, { Component } from 'react';

import './students-list-element.css';
import noavatar from "../img/noavatar.png";

export default class StudentsListElement extends Component {

    constructor(props) {
        super(props);
        
    }

    getReturnLink = () => {
        const {profilePic} = this.props;
        let nameFoo = `${profilePic}`;
        let path = {noavatar};

        if (nameFoo) {
            path = require(`../img/${nameFoo}`);
        }

        return path;
    };

    render(){

        const { idx, date, SecondName, idCard,
                FirstName, Patronymic, Speciality, 
                College, Faculty, PractiesBegining, 
                PractiesEnding, Phone, Email, buttons, 
                visibleDelBtn, onShowModalWindowDeleted, 
                onShowModalStudentCardModal, activePage, studentCard, ratingTable } = this.props;

        const { average_mark, conflict, conflict_comment,
                educability, educability_comment, initiative, 
                initiative_comment, interest, interest_comment,
                quality, quality_comment, relationship, 
                relationship_comment, responsibility, responsibility_comment } = ratingTable;
        

        let visibleBtnDel = "btn-close none";
        let list_element = "list-element";
        let visibleBtn = "";

        if (visibleDelBtn) {
            visibleBtnDel = "btn-close";
        }

        if (!average_mark && !conflict && !conflict_comment && !educability && !educability_comment &&
            !initiative && !initiative_comment && !interest && !interest_comment &&
            !quality && !quality_comment && !relationship && !relationship_comment &&
            !responsibility && !responsibility_comment && studentCard === "practic-card") {
                visibleBtn = " disabled";
            }
        
        return(
            <React.Fragment>
                <div className="container-list-element">
                    <div className="list-element" onClick={onShowModalStudentCardModal}>
                        <div className="list-element__our">
                            <div className = "list-element-identificator">
                                <p className = "list-element-identificator__label">№</p>
                                <p className = "list-element-identificator__number">{activePage*10-10 + idx + 1}</p>
                            </div>
                            <div className = "list-element-date">
                                <p className = "list-element-date__label">Дата заявки</p>
                                <p className = "list-element-date__value">{ date }</p>
                            </div>
                        </div>
                        <img src = {this.getReturnLink()} alt="Фотография студента" className = "list__profile-pic" />
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
                    </div>
                    <div className = "list__buttons">
                        {buttons.map((item, index) => {
                            return (
                                <label className="list__buttons-our" key={index}>
                                    <i 
                                        className ={`fa ${item.icon}${visibleBtn}`}
                                        onClick={() => item.change_category(idCard)}>
                                    </i>
                                    <label className="list__buttons-text">{item.label}</label>
                                </label>
                            );           
                        })}
                    </div>
                </div>
                <div className={visibleBtnDel}>
                    <i className="fa fa-minus-circle" onClick={onShowModalWindowDeleted}></i>
                </div>
            </React.Fragment>
        );
    };
};