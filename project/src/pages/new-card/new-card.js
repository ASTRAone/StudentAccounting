import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react'

import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './new-card.css';

export default class NewCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            SecondName: this.props.dataList.studentModalCardData.SecondName,
            FirstName: this.props.dataList.studentModalCardData.FirstName,
            Patronymic: this.props.dataList.studentModalCardData.Patronymic,
            Email: this.props.dataList.studentModalCardData.Email,
            Phone: this.props.dataList.studentModalCardData.Phone,
            College: this.props.dataList.studentModalCardData.College,
            Faculty: this.props.dataList.studentModalCardData.Faculty,
            PractiesBegining: this.props.dataList.studentModalCardData.PractiesBegining,
            PractiesEnding: this.props.dataList.studentModalCardData.PractiesEnding,
            Speciality: this.props.dataList.studentModalCardData.Speciality,

            visibleEditCard: false
        }
    }

    // Пример редактирования

    // Редактирование элементов
    visibleEditCardStudent = () => {
        this.setState({
            visibleEditCard: true
        });
    };

    // Редактирование начальной даты практики
    editDataPractiesBegining = (e) => {
        this.setState({
            PractiesBegining: e.target.value
        });
    };

    // Редактирование конечной даты практики
    editDataPractiesEnding = (e) => {
        this.setState({
            PractiesEnding: e.target.value
        });
    };

    render() {

        let card__info_text = "card__info-text";
        let label = "label";
        let our_input = "our-input";

        if (this.state.visibleEditCard === true) {
            card__info_text = "card__info-text none";
        }

        if (this.state.visibleEditCard === false) {
            our_input = "our-input none";
            label = "label none";
        }

        const { onShowModalWindowDeletedInCard, onHideModalStudentCardModal, studentModalCardData } = this.props.dataList
        
        return ( 
            <div className = "student-card">
                <div className = "card__header">
                    <p className = "card__label">Карточка студента</p>                   
                    <div className = "card__controls">
                        <i className = "fa fa-print"></i>
                        <i className = "fa fa-edit" onClick={this.visibleEditCardStudent}></i>
                        <i className = "fa fa-download"></i>
                        <i className = "fa fa-trash" onClick={onShowModalWindowDeletedInCard}></i>
                        <i className= "fa fa-times-circle" onClick={onHideModalStudentCardModal}></i>
                    </div>
                </div>
                <div className = "card__student">
                    <img src = {noavatar} className = "card__profile-pic" />
                    <div className = "card__student-info">
                        <p className = "card__student-name">{this.state.SecondName + " " + this.state.FirstName + " " + this.state.Patronymic}</p>
                        <div className = "card__contacts">
                            <i className = "fa fa-envelope"></i>
                            <p className = "card__student-contact">{this.state.Email}</p>
                        </div>
                        <div className = "card__contacts">
                            <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                            <p className = "card__student-contact">{this.state.Phone}</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Учебное заведение:</p>
                            <p className = "card__info-text">{this.state.College}</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Факультет, специальность:</p>
                            <p className = "card__info-text">{this.state.Faculty}</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Сроки практики:</p>
                            <p className = {card__info_text}>{this.state.PractiesBegining} - {this.state.PractiesEnding}</p>
                            <div className={our_input}>
                                <Input 
                                    className="card__info-text_input"
                                    type="text" 
                                    value={this.state.PractiesBegining}
                                    onChange={this.editDataPractiesBegining}/>
                                <label className={label}> - </label>
                                <Input 
                                    className="card__info-text_input"
                                    type="text" 
                                    value={this.state.PractiesEnding}
                                    onChange={this.editDataPractiesEnding}/>
                            </div>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Направление деятельности:</p>
                            <p className = "card__info-text">{this.state.Speciality}</p>
                        </div>
                    </div>
                </div>
            </div>          
        );
    };
};