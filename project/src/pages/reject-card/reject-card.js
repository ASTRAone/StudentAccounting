import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react'

import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './reject-card.css';

export default class RejectCard extends Component {
    render() {

        const { onShowModalWindowDeletedInCard, onHideModalStudentCardModal, studentModalCardData } = this.props.dataList

        const { SecondName, FirstName, Patronymic, Email, Phone, College,
                Faculty, PractiesBegining, PractiesEnding, Speciality } = studentModalCardData;
        
        return ( 
            <div className = "student-card">
                <div className = "card__header">
                    <p className = "card__label">Карточка студента</p>                   
                    <div className = "card__controls">
                        <i className = "fa fa-print"></i>
                        <i className = "fa fa-edit"></i>
                        <i className = "fa fa-download"></i>
                        <i className = "fa fa-trash" onClick={onShowModalWindowDeletedInCard}></i>
                        <i className= "fa fa-times-circle" onClick={onHideModalStudentCardModal}></i>
                    </div>
                </div>
                <div className = "card__student">
                    <img src = {noavatar} className = "card__profile-pic" />
                    <div className = "card__student-info">
                        <p className = "card__student-name">{SecondName + " " + FirstName + " " + Patronymic}</p>
                        <div className = "card__contacts">
                            <i className = "fa fa-envelope"></i>
                            <p className = "card__student-contact">{Email}</p>
                        </div>
                        <div className = "card__contacts">
                            <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                            <p className = "card__student-contact">{Phone}</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Учебное заведение:</p>
                            <p className = "card__info-text">{College}</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Факультет, специальность:</p>
                            <p className = "card__info-text">{Faculty}</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Сроки практики:</p>
                            <p className = "card__info-text">{PractiesBegining} - {PractiesEnding}</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Направление деятельности:</p>
                            <p className = "card__info-text">{Speciality}</p>
                        </div>
                    </div>
                </div>
            </div>            
        );
    };
};