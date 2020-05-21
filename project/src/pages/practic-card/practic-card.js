import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';
import StarRatings from 'react-star-ratings';

import RatingTable from '../rating-table';
import Alteration from '../../components/alteration';
import ChangesSaved from '../../components/changes-saved';

import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './practic-card.css';

export default class PracicCard extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.dataList.studentModalCardData.id,
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
            comment: this.props.dataList.studentModalCardData.comment,
            ratingTable: this.props.dataList.studentModalCardData.ratingTable,
            starRatings: this.props.dataList.studentModalCardData.starRatings,
            Curator: this.props.dataList.studentModalCardData.Curator,

            visibleEditCard: false,

            visibleCuratorBtn: true,
            visibleReadonly: true,

            visibleAlteration: false,
            visibleChangesSaved: false,
            visibleRatingTable: false
        }
    }

    // Разрешить редактирование
    visibleEditCardStudent = () => {
        this.setState({
            visibleEditCard: true,
            visibleReadonly: false
        });
    };

    // Открыть окно оценок компетенций студента
    onShowRatingTable = () => {
        this.setState({
            visibleRatingTable: true
        });
    };

    // Закрыть окно оценок компетенций студента
    onHideRatingTable = () => {
        this.setState({
            visibleRatingTable: false
        });
    };

    // Изменение почты
    editEmail = (e) => {
        this.setState({
            Email: e.target.value
        });
    };

    // Изменить телефон
    editPhone = (e) => {
        this.setState({
            Phone: e.target.value
        });
    };

    // Изменить учебное заведение
    editCollege = (e) => {
        this.setState({
            College: e.target.value
        });
    };

    // Изменить факультет
    editFaculty = (e) => {
        this.setState({
            Faculty: e.target.value
        });
    };

    // Изменить начальную дату практики
    editPractiesBegining = (e) => {
        this.setState({
            PractiesBegining: e.target.value
        });
    };

    // Изменить конечную дату практики
    editPractiesEnding = (e) => {
        this.setState({
            PractiesEnding: e.target.value
        });
    };

    // Изменить специальность
    editSpeciality = (e) => {
        this.setState({
            Speciality: e.target.value
        });
    };

    // Изменить комментарий
    editComment = (e) => {
        this.setState({
            comment: e.target.value
        });
    };

    // Изменить рейтинг
    editRating = (e) => {
        this.setState({
            starRatings: e
        });
    };
 
    // Отмена изменений
    discardСhangeCard = () => {
        this.setState({
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
            comment: this.props.dataList.studentModalCardData.comment,
            ratingTable: this.props.dataList.studentModalCardData.ratingTable,
            starRatings: this.props.dataList.studentModalCardData.starRatings,
            
            visibleEditCard: false,
            visibleReadonly: true
        });

        this.props.dataList.onHideModalStudentCardModal()
    };

    // Сохранение изменений
    onCallSave = () => {
        this.setState({
            visibleAlteration: true
        });
    };

    // Закрыть окно изменений
    onCloseAlteration = () => {
        this.setState({
            visibleAlteration: false
        });
    };

    // Подтвердить сохранение изменений
    onSaveChange = () => {
        this.setState({
            visibleEditCard: false,
            visibleReadonly: true,
            visibleAlteration: false,
            visibleChangesSaved: true
        });

        console.log(this.state);
    };

    // Закрыть окно подтверждения изменений
    bringСhanges = () => {
        this.setState({
            visibleChangesSaved: false
        });

        this.props.dataList.onHideModalStudentCardModal()
    };

    // Сохранение рейтинговой таблицы студентов
    onSaveTableRatingTable = (item) => {
        this.setState({
            ratingTable: {item}
        });

        console.log(this.state.ratingTable);
    };
 
    render() {

        const { onShowModalWindowDeletedInCard, studentCardModal } = this.props.dataList;

        let card__student_label = "card__student_label";
        let card__student_contact = "card__student-contact";
        let card__info_text = "card__info-text";
        let card__contacts = "card__contacts";

        if (this.state.visibleEditCard === true) {
            card__student_contact = "card__student-contact none";
            card__info_text = "card__info-text none";
            card__contacts = "card__contacts edit"
        }

        if (this.state.visibleEditCard === false) {
            card__student_label = "card__student_label none"
        }

        if (studentCardModal === true) {
            document.body.style.overflow = 'hidden';
        }

        return ( 
                <div className="container-practic-card">
                    <div className = "student-card">
                        <div className = "card__header">
                            <p className = "card__label">Карточка студента</p>                   
                            <div className = "card__controls">
                                <i className = "fa fa-print"></i>
                                <i className = "fa fa-edit" onClick={this.visibleEditCardStudent}></i>
                                <i className = "fa fa-download"></i>
                                <i className = "fa fa-trash" onClick={onShowModalWindowDeletedInCard}></i>
                            </div>
                        </div>
                        <div className = "card__student">
                            <img src = {noavatar} alt="Фотография студента" className = "card__profile-pic" />
                            <div className = "card__student-info">
                                <p className = "card__student-name">{this.state.SecondName + " " + this.state.FirstName + " " + this.state.Patronymic}</p>
                                <div className = {card__contacts}>
                                    <i className = "fa fa-envelope"></i>
                                    <p className = {card__student_contact}>{this.state.Email}</p>
                                    <label className={card__student_label}>
                                        <Input 
                                            className="card__student_input"
                                            type="email"
                                            value={this.state.Email}
                                            onChange={this.editEmail}/>
                                    </label>                
                                </div>
                                <div className = {card__contacts}>
                                    <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                                    <p className = {card__student_contact}>{this.state.Phone}</p>
                                    <label className={card__student_label}>
                                        <Input 
                                            className="card__student_input"
                                            type="text"
                                            value={this.state.Phone}
                                            onChange={this.editPhone}/>
                                    </label>     
                                </div>
                                <div className = {card__contacts}>
                                    <p className = "card__info-label">Учебное заведение:</p>
                                    <p className = {card__info_text}>{this.state.College}</p>
                                    <label className={card__student_label}>
                                        <Input 
                                            className="card__student_input"
                                            type="text"
                                            value={this.state.College}
                                            onChange={this.editCollege}/>
                                    </label>   
                                </div>
                                <div className = {card__contacts}>
                                    <p className = "card__info-label">Факультет, специальность:</p>
                                    <p className = {card__info_text}>{this.state.Faculty}</p>
                                    <label className={card__student_label}>
                                        <Input 
                                            className="card__student_input"
                                            type="text"
                                            value={this.state.Faculty}
                                            onChange={this.editFaculty}/>
                                    </label>   
                                </div>
                                <div className = {card__contacts}>
                                    <p className = "card__info-label">Сроки практики:</p>
                                    <p className = {card__info_text}>{this.state.PractiesBegining} - {this.state.PractiesEnding}</p>
                                    <label className={card__student_label}>
                                        <Input 
                                            className="card__student_input"
                                            type="text"
                                            value={this.state.PractiesBegining}
                                            onChange={this.editPractiesBegining}/>
                                        <label>-</label>
                                        <Input 
                                            className="card__student_input"
                                            type="text"
                                            value={this.state.PractiesEnding}
                                            onChange={this.editPractiesEnding}/>
                                    </label>   
                                </div>
                                <div className = {card__contacts}>
                                    <p className = "card__info-label">Направление деятельности:</p>
                                    <p className = {card__info_text}>{this.state.Speciality}</p>
                                    <label className={card__student_label}>
                                        <Input 
                                            className="card__student_input"
                                            type="text"
                                            value={this.state.Speciality}
                                            onChange={this.editSpeciality}/>
                                    </label>
                                </div>
                            </div>
                            <div className = "card__curator">
                                <img src = {noavatarcurator} alt="Фотография куратора" className = "card__profile-pic" />
                                <p className = "card__curator__action_student" onClick={this.onShowRatingTable}>Оценить компетенции студента</p>
                                <button disabled={this.state.visibleCuratorBtn} className = "btn card__curator__choose-button">Назначить куратора</button>
                            </div>
                        </div>
                        <div className = "card__rating  ">
                            <div className = "card__main-rating">
                                <p className = "card__main-rating-label">Общая оценка за практику</p>
                                <div className = "stars">
                                    <div id="reviewStars-input">
                                        <StarRatings 
                                            rating={this.state.starRatings}
                                            starRatedColor="gold"
                                            starHoverColor="blue"
                                            changeRating={this.editRating}
                                            numberOfStars={5}
                                            name='rating'/>
                                    </div>
                                </div>
                            </div>
                            <div className = "card__main-rating">
                                <p className = "card__main-rating-label">Отчет по практике</p>
                                <div className = "card__download-doc">
                                    <label>
                                        <i className="fa fa-folder card__download-doc__icon"></i>
                                        <p className = "card__download-doc__label">Прикрепить файл</p>
                                    </label> 
                                </div> 
                            </div>
                            <textarea 
                                onChange={this.editComment}
                                readOnly={this.state.visibleReadonly}
                                value={this.state.comment} 
                                className = "card__comment" 
                                placeholder = "Комментарий">
                            </textarea>
                        </div>
                        <div className="card-our_practic">
                            <button className="btn card-our__btn" onClick={this.discardСhangeCard}>Отмена</button>
                            <button className="btn card-our__btn" onClick={this.onCallSave}>Сохранить</button>
                        </div>
                    </div>
                    <Alteration 
                        visibleAlteration={this.state.visibleAlteration}
                        onCloseAlteration={this.onCloseAlteration}
                        onSaveChange={this.onSaveChange}/>
                    <ChangesSaved 
                        visibleChangesSaved={this.state.visibleChangesSaved}
                        bringСhanges={this.bringСhanges}/>
                    <RatingTable 
                        ratingTableData={this.state.ratingTable}
                        dataStudent={this.props.dataList.studentModalCardData}
                        visibleRatingTable={this.state.visibleRatingTable}
                        onHideRatingTable={this.onHideRatingTable}
                        onSaveTableRatingTable={this.onSaveTableRatingTable}/>
                </div>
        );
    };
};