import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react'

import Alteration from '../../components/alteration';
import ChangesSaved from '../../components/changes-saved';

import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './new-card.css';

import {connect} from 'react-redux';
import {getListInstitutes} from '../../_actions/applications';

class NewCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Id: this.props.dataList.studentModalCardData.id,
            SecondName: this.props.dataList.studentModalCardData.secondName,
            FirstName: this.props.dataList.studentModalCardData.firstName,
            Patronymic: this.props.dataList.studentModalCardData.patronymic,
            Email: this.props.dataList.studentModalCardData.email,
            Phone: this.props.dataList.studentModalCardData.phone,
            CollegeId: this.props.dataList.studentModalCardData.institutionId,
            Faculty: this.props.dataList.studentModalCardData.faculty,
            PractiesBegining: this.props.dataList.studentModalCardData.practiesBegining.slice(0, 11),
            PractiesEnding: this.props.dataList.studentModalCardData.practiesEnding.slice(0, 11),
            Speciality: this.props.dataList.studentModalCardData.speciality,
            
            institutionsList: this.props.institutesList || [],

            visibleEditCard: false,
            visibleAlteration: false,
            visibleChangesSaved: false
        }
    }

    componentDidMount () {
        this.props.getListInstitutes();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.institutesList !== this.props.institutesList) {
            this.setState({
                institutionsList: this.props.institutesList
            });
        }
    }

    // Обработка изображений
    getReturnImage = () => {
        let photo = this.props.dataList.photo;
        photo = `${photo}`;
        let photoFoo = noavatar;

        if (photo) {
            photoFoo = `data:image/png;base64,${photo}`
        }

        return photoFoo;
    };

    // Обработка названия учебного заведения
    getReturnNameColledge = () => {
        let nameColledge = "";

        if (this.state.institutionsList.length) {
            this.state.institutionsList.forEach(element => {
                if (element.id === this.state.CollegeId) {
                    nameColledge = element.name;
                } else {
                    nameColledge = "Название не определено"
                }
            });
        }

        return nameColledge;
    };

    // Редактирование элементов
    visibleEditCardStudent = () => {
        this.setState({
            visibleEditCard: true
        });
    };

    // Отмена редактирования
    closeEdit = () => {
        this.setState({
            SecondName: this.props.dataList.studentModalCardData.secondName,
            FirstName: this.props.dataList.studentModalCardData.firstName,
            Patronymic: this.props.dataList.studentModalCardData.patronymic,
            Email: this.props.dataList.studentModalCardData.email,
            Phone: this.props.dataList.studentModalCardData.phone,
            CollegeId: this.props.dataList.studentModalCardData.institutionId,
            Speciality: this.props.dataList.studentModalCardData.speciality,
            PractiesBegining: this.props.dataList.studentModalCardData.practiesBegining.slice(0, 11),
            PractiesEnding: this.props.dataList.studentModalCardData.practiesEnding.slice(0, 11),
            // Speciality: this.props.dataList.studentModalCardData.Speciality,

            visibleEditCard: false
        });
    };

    // Изменение почты
    editEmail = (e) => {
        this.setState({
            Email: e.target.value
        });
    };

    // Редактирование начальной даты практики
    editDataPractiesBegining = (e) => {
        this.setState({
            PractiesBegining: e.target.value
        });
    };

    // Редактирование номера телефона
    editPhone = (e) => {
        this.setState({
            Phone: e.target.value
        });
    };

    // Редактирование учебного заведения
    editCollege = (e) => {
        let id;

        this.state.institutionsList.forEach(element => {
            if (element.name.toLowerCase() === e.target.value.toLowerCase()) {
                id = element.id
            }
        });

        this.setState({
            // College: e.target.value,
            CollegeId: id
        });
    };

    // Редактирование специальности
    editFaculty = (e) => {
        this.setState({
            Speciality: e.target.value
        });
    };

    // Редактирование направления специальности
    editSpeciality = (e) => {
        this.setState({
            Speciality: e.target.value
        });
    };

    // Редактирование конечной даты практики
    editDataPractiesEnding = (e) => {
        this.setState({
            PractiesEnding: e.target.value
        });
    };

    // Сохранение изменений
    onSave = () => {
        this.setState({
            visibleAlteration: true
        });
    };

    // Отменить изменение
    onCloseAlteration = () => {
        this.setState({
            visibleAlteration: false
        });
    };

    // Сохранить изменения
    onSaveChange = () => {
        this.setState({
            visibleEditCard: false,
            visibleAlteration: false,
            visibleChangesSaved: true
        });

        console.log(this.state);
    };

    // Закрыть окно подтверждения изменений
    bringСhanges = () => {
        this.setState({
            visibleChangesSaved: false,
            visibleEditCard: false
        });

        this.props.dataList.onHideModalStudentCardModal();
    };

    render() {

        const { onShowModalWindowDeletedInCard, onHideModalStudentCardModal, studentCardModal, photo } = this.props.dataList

        let card__info_text = "card__info-text";
        let label = "label";
        let our_input = "our-input";
        let student_card__our_btn = "student-card-new__our-btn"

        let card__student_contact = "card__student-contact";

        if (this.state.visibleEditCard === true) {
            card__info_text = "card__info-text none";
            card__student_contact = "card__student-contact none";
        }

        if (this.state.visibleEditCard === false) {
            our_input = "our-input none";
            label = "label none";
            student_card__our_btn = "student-card-new__our-btn none"
        }

        if (studentCardModal === true) {
            document.body.style.overflow = 'hidden';
        }

        // console.log(`../../img/${this.state.profilePic}`  );

        return ( 
                <div className="container-new-card">
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
                            <img src = {this.getReturnImage()} alt="Фотография студента" className = "card__profile-pic" />
                            <div className = "card__student-info">
                                <p className = "card__student-name">{this.state.SecondName + " " + this.state.FirstName + " " + this.state.Patronymic}</p>
                                <div className = "card__contacts">
                                    <i className = "fa fa-envelope"></i>
                                    <p className = {card__student_contact}>{this.state.Email}</p>
                                    <label className={our_input}>
                                        <Input 
                                            className="card__info-text_input"
                                            type="text" 
                                            value={this.state.Email}
                                            onChange={this.editEmail}/>
                                    </label>
                                </div>
                                <div className = "card__contacts">
                                    <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                                    <p className = {card__student_contact}>{this.state.Phone}</p>
                                    <label className={our_input}>
                                        <Input 
                                            className="card__info-text_input"
                                            type="text" 
                                            value={this.state.Phone}
                                            onChange={this.editPhone}/>
                                    </label>
                                </div>
                                <div className = "card__contacts">
                                    <p className = "card__info-label">Учебное заведение:</p>
                                    <p className = {card__info_text}>{this.getReturnNameColledge()}</p>
                                    <label className={our_input}>
                                        <Input 
                                            className="card__info-text_input"
                                            type="text" 
                                            value={this.getReturnNameColledge()}
                                            onChange={this.editCollege}/>
                                    </label>
                                </div>
                                <div className = "card__contacts">
                                    <p className = "card__info-label">Факультет, специальность:</p>
                                    <p className = {card__info_text}>{this.state.Speciality}</p>
                                    <label className={our_input}>
                                        <Input 
                                            className="card__info-text_input"
                                            type="text" 
                                            value={this.state.Speciality}
                                            onChange={this.editFaculty}/>
                                    </label>
                                </div>
                                <div className = "card__contacts">
                                    <p className = "card__info-label">Сроки практики:</p>
                                    <p className = {card__info_text}>{this.state.PractiesBegining} - {this.state.PractiesEnding}</p>
                                    <label className={our_input}>
                                        <Input 
                                            className="card__info-text_input"
                                            type="text" 
                                            value={this.state.PractiesBegining}
                                            onChange={this.editDataPractiesBegining}/>
                                        <label className={label}> - </label>
                                        <Input 
                                            className="card__info-text_input bt"
                                            type="text" 
                                            value={this.state.PractiesEnding}
                                            onChange={this.editDataPractiesEnding}/>
                                    </label>
                                </div>
                                <div className = "card__contacts">
                                    <p className = "card__info-label">Направление деятельности:</p>
                                    <p className = {card__info_text}>{this.state.Speciality}</p>
                                    <label className={our_input}>
                                        <Input 
                                            className="card__info-text_input"
                                            type="text" 
                                            value={this.state.Speciality}
                                            onChange={this.editSpeciality}/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={student_card__our_btn}>
                            <button className="btn" onClick={this.closeEdit}>Отмена</button>
                            <button className="btn" onClick={this.onSave}>Сохранить</button>
                        </div>
                    </div>   
                    <Alteration 
                        visibleAlteration={this.state.visibleAlteration}
                        onCloseAlteration={this.onCloseAlteration}
                        onSaveChange={this.onSaveChange}/>
                    <ChangesSaved 
                        visibleChangesSaved={this.state.visibleChangesSaved}
                        bringСhanges={this.bringСhanges}/>
                </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        institutionsList: state.applications.institutesList
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        getListInstitutes
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(NewCard);