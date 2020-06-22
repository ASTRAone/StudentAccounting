import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';

import Alteration from '../../components/alteration';
import ChangesSaved from '../../components/changes-saved';

import AppointCurator from '../appoint-curator';

import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './approved-card.css';

import {connect} from 'react-redux';
import {getListCurators, getListInstitutes} from '../../_actions/applications';

// добавить выпадающий список выбора учебного заведения

class ApprovedCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.dataList.studentModalCardData.id,
            SecondName: this.props.dataList.studentModalCardData.secondName,
            FirstName: this.props.dataList.studentModalCardData.firstName,
            Patronymic: this.props.dataList.studentModalCardData.patronymic,
            Email: this.props.dataList.studentModalCardData.email,
            Phone: this.props.dataList.studentModalCardData.phone,
            CollegeId: this.props.dataList.studentModalCardData.institutionId,
            Faculty: this.props.dataList.studentModalCardData.practicArea,
            PractiesBegining: this.props.dataList.studentModalCardData.practiesBegining.slice(0,10),
            PractiesEnding: this.props.dataList.studentModalCardData.practiesEnding.slice(0,10),
            Speciality: this.props.dataList.studentModalCardData.speciality,
            CuratorId: this.props.dataList.studentModalCardData.mentorId,

            curatorsList: this.props.curatorsList || [],
            institutionsList: this.props.institutesList || [],

            visibleEditCard: false,
            visibleAlteration: false,
            visibleChangesSaved: false,
            // visibleEditCurator: true,
            visibleAppointCuratorCard: false
        }
    }

    componentDidMount () {
        this.props.getListCurators();
        this.props.getListInstitutes();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.curatorsList !== this.props.curatorsList) {
            this.setState({
                curatorsList: this.props.curatorsList
            });
        }
        if (prevProps.institutesList !== this.props.institutesList) {
            this.setState({
                institutionsList: this.props.institutesList
            });
        }
    }

    // Получение инициалов куратора
    getReturnNameCurators = () => {
        let nameCurator = "";

        if (this.state.curatorsList.length) {
            this.state.curatorsList.forEach(element => {
                if (element.id === this.state.CuratorId) {
                    nameCurator = element.secondName + " " + element.firstName[0].toUpperCase() + ". " + element.patronymic[0].toUpperCase();
                }
            });
        }

        return nameCurator;
    };

    // Обработка изображений
    getReturnImage = () => {
        let photo = this.props.dataList.studentModalCardData.photo === null ? "" : this.props.dataList.studentModalCardData.photo;
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
        
        if (this.props.institutionsList.length) {
            this.props.institutionsList.forEach(element => {
                if (element.id === this.props.dataList.studentModalCardData.institutionId) {
                    nameColledge = element.name;
                }
            });
        }
        
        return nameColledge;
    };

    // Разрешить редактирование
    visibleEditCardStudent = () => {
        this.setState({
            visibleEditCard: true,
            // visibleEditCurator: false
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
            Faculty: e.target.value
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

    // Отмена редактирования
    closeEditCard = () => {
        this.setState({
            visibleEditCard: false,
            visibleEditCurator: true,

            SecondName: this.props.dataList.studentModalCardData.secondName,
            FirstName: this.props.dataList.studentModalCardData.firstName,
            Patronymic: this.props.dataList.studentModalCardData.patronymic,
            Email: this.props.dataList.studentModalCardData.email,
            Phone: this.props.dataList.studentModalCardData.phone,
            CollegeId: this.props.dataList.studentModalCardData.institutionId,
            Faculty: this.props.dataList.studentModalCardData.practicArea,
            PractiesBegining: this.props.dataList.studentModalCardData.practiesBegining.slice(0,10),
            PractiesEnding: this.props.dataList.studentModalCardData.practiesEnding.slice(0,10),
            Speciality: this.props.dataList.studentModalCardData.speciality,
            CuratorId: this.props.dataList.studentModalCardData.mentorId,
        });
    };

    // Подтверждение изменений
    onSave = () => {
        this.setState({
            visibleAlteration: true
        });
    };

    // Сохранение изменений
    onSaveChange = () => {
        this.setState({
            visibleAlteration: false,
            visibleEditCard: false,
            visibleChangesSaved: true,
            visibleEditCurator: true
        });

        console.log(this.state);
    };

    // Закрыть окно сохранения изменений
    onCloseAlteration = () => {
        this.setState({
            visibleAlteration: false
        });
    };

    // Подтвердить сохранение
    bringСhanges = () =>{
        this.setState({
            visibleChangesSaved: false
        });

        this.props.dataList.onHideModalStudentCardModal();
    };

    // Показать модальное окно всех кураторов
    onShowModalAppointCuratorCard = () => {
        this.setState({
            visibleAppointCuratorCard: true
        });
    };

    // Скрыть модальное окно всех кураторов
    onHideModalAppointCuratorCard = () => {
        this.setState({
            visibleAppointCuratorCard: false
        });
    };

    // Добавление куратора
    addCuratorStud = (id) => {
        this.setState({
            CuratorId: id
        });
    };

    // Изменение куратора (подумать над этим)
    onResetCurator = () => {
        this.setState({
            visibleAppointCuratorCard: true
        });
    };

    render() {

        console.log(this.state.institutionId)

        const { onShowModalWindowDeletedInCard, onHideModalStudentCardModal, studentCardModal, photo } = this.props.dataList;

        let our_input = "our-input";
        let card__student_contact = "card__student-contact";
        let student_card__our_btn = "student-card-approved__our-btn";
        let card__info_text = "card__info-text";
        let card__curator__choose_button = "card__curator__choose-button";
        let card_curator_intials = "card_curator_intials none";
        let card_reset_curator = "card_reset_curator none";

        if (this.state.visibleEditCard === false) {
            our_input = "our-input none";
            student_card__our_btn = "student-card-approved__our-btn none";
        }

        if (this.state.visibleEditCard === true) {
            card__student_contact = "card__student-contact none";
            card__info_text = "card__info-text none";
        }

        if (studentCardModal === true) {
            document.body.style.overflow = 'hidden';
        }

        if (this.state.CuratorId !== null) {
            card__curator__choose_button = "card__curator__choose_button none";
            card_curator_intials = "card_curator_intials";
            card_reset_curator = "card_reset_curator";
        }

        return (
            <div className="container-approved-card">
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
                                        type="email"
                                        className="card__info-text_input"
                                        value={this.state.Email}
                                        onChange={this.editEmail}/>
                                </label>
                            </div>
                            <div className = "card__contacts">
                                <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                                <p className = {card__student_contact}>{this.state.Phone}</p>
                                <label className={our_input}>
                                    <Input 
                                        type="email"
                                        className="card__info-text_input"
                                        value={this.state.Phone}
                                        onChange={this.editPhone}/>
                                </label>
                            </div>
                            <div className = "card__contacts">
                                <p className = "card__info-label">Учебное заведение:</p>
                                <p className = {card__info_text}>{this.getReturnNameColledge()}</p>
                                <label className={our_input}>
                                    <Input 
                                        type="email"
                                        className="card__info-text_input"
                                        value={this.getReturnNameColledge()}
                                        onChange={this.editCollege}/>
                                        {/* Добавить list */}
                                </label>
                            </div>
                            <div className = "card__contacts">
                                <p className = "card__info-label">Факультет, специальность:</p>
                                <p className = {card__info_text}>{this.state.Speciality}</p>
                                <label className={our_input}>
                                    <Input 
                                        type="email"
                                        className="card__info-text_input"
                                        value={this.state.Speciality}
                                        onChange={this.editSpeciality}/>
                                </label>
                            </div>
                            <div className = "card__contacts">
                                <p className = "card__info-label">Сроки практики:</p>
                                <p className = {card__info_text}>{this.state.PractiesBegining.slice(0, 10)} - {this.state.PractiesEnding.slice(0, 10)}</p>
                                <label className={our_input}>
                                    <Input 
                                        type="email"
                                        className="card__info-text_input"
                                        value={this.state.PractiesBegining}
                                        onChange={this.editDataPractiesBegining}/>
                                    <label>-</label>
                                    <Input 
                                        type="email"
                                        className="card__info-text_input bt"
                                        value={this.state.PractiesEnding}
                                        onChange={this.editDataPractiesEnding}/>
                                </label>
                            </div>
                            <div className = "card__contacts">
                                <p className = "card__info-label">Направление деятельности:</p>
                                <p className = {card__info_text}>{this.state.Faculty}</p>
                                <label className={our_input}>
                                    <Input 
                                        type="email"
                                        className="card__info-text_input"
                                        value={this.state.Faculty}
                                        onChange={this.editFaculty}/>
                                </label>
                            </div>
                        </div>
                        <div className = "card__curator">
                            <img src = {noavatarcurator} alt="Фотография куратора" className = "card__profile-pic card__profile-pic_curator" />
                            <button 
                                className = {`btn ${card__curator__choose_button}`}
                                onClick={this.onShowModalAppointCuratorCard}>
                                    Назначить куратора
                            </button>
                            <p className={card_curator_intials}>


                                {/* {this.state.Curator} */}

                                {this.getReturnNameCurators()}
                            </p>
                            <button 
                                className={`btn ${card_reset_curator}`}
                                onClick={this.onResetCurator}>
                                    Выбрать другого
                            </button>
                        </div>
                    </div>
                    <div className={student_card__our_btn}>
                        <button className="btn" onClick={this.closeEditCard}>Отмена</button>
                        <button className="btn" onClick={this.onSave}>Сохранить</button>
                    </div>
                </div>         
                < Alteration 
                    visibleAlteration={this.state.visibleAlteration}
                    onSaveChange={this.onSaveChange}
                    onCloseAlteration={this.onCloseAlteration}/>
                <ChangesSaved 
                    visibleChangesSaved={this.state.visibleChangesSaved}
                    bringСhanges={this.bringСhanges}/>
                <AppointCurator 
                    visibleCuratorCard={this.state.visibleAppointCuratorCard}
                    onHideCuratorCard={this.onHideModalAppointCuratorCard}
                    addCuratorStud={this.addCuratorStud}
                    idStudent={this.state.id}/>
            </div>  
        );
    };
};

const mapStateToProps = (state) => {
    return {
        curatorsList: state.applications.curatorsList,
        institutionsList: state.applications.institutesList
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        getListCurators,
        getListInstitutes
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(ApprovedCard);