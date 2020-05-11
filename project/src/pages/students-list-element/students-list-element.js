import React, { Component } from 'react';

import './students-list-element.css';
import noavatar from "../img/noavatar.png";

import DeleteApplication from '../../components/delete-application';
import achivePage from '../../page/achivePage';

export default class StudentsListElement extends Component {

    constructor() {
        super();
    }

    render(){

        const { idx, date, profilePic, SecondName, idCard,
                FirstName, Patronymic, Speciality, 
                College, Faculty, PractiesBegining, 
                PractiesEnding, Phone, Email, buttons, 
                visibleDelBtn, onShowModalWindowDeleted, 
                onShowModalStudentCardModal, activePage } = this.props;

        let visibleBtnDel = "btn-close none";
        let list_element = "list-element";

        if (visibleDelBtn) {
            visibleBtnDel = "btn-close";
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
                    </div>
                    <div className = "list__buttons">
                        {buttons.map((item, index) => {
                            return (
                                <label className="list__buttons-our" key={index}>
                                    <i 
                                        className ={`fa ${item.icon}`}
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