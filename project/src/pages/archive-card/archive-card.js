import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';
import StarRatings from 'react-star-ratings';

import RatingTableArchive from '../rating-table-archive';


import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './archive-card.css';

export default class ArchiveCard extends Component {

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
            comment: this.props.dataList.studentModalCardData.comment,
            ratingTable: this.props.dataList.studentModalCardData.ratingTable,
            starRatings: this.props.dataList.studentModalCardData.starRatings,

            visibleRatingTable: false,
        }
    }

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
    
    render() {

        const { onShowModalWindowDeletedInCard, onHideModalStudentCardModal, studentCardModal } = this.props.dataList;

        if (studentCardModal === true) {
            document.body.style.overflow = 'hidden';
        }
                
        return ( 
                <div className="container-archive-card">
                    <div className = "student-card">
                        <div className = "card__header">
                            <p className = "card__label">Карточка студента</p>                   
                            <div className = "card__controls">
                                <i className = "fa fa-print"></i>
                                <i className = "fa fa-download"></i>
                                <i className = "fa fa-trash" onClick={onShowModalWindowDeletedInCard}></i>
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
                                    <p className = "card__info-text">{this.state.PractiesBegining} - {this.state.PractiesEnding}</p>
                                </div>
                                <div className = "card__contacts">
                                    <p className = "card__info-label">Направление деятельности:</p>
                                    <p className = "card__info-text">{this.state.Speciality}</p>
                                </div>
                            </div>
                            <div className = "card__curator">
                                <img src = {noavatarcurator} className = "card__profile-pic" />
                                <p className = "card__curator__action" onClick={this.onShowRatingTable}>Посмотреть компетенции студента</p>
                                <p className = "card__curator__action-curator">Посмотреть информацию о наставнике</p>
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
                                            numberOfStars={5}
                                            name='rating'/>
                                    </div>
                                </div>
                            </div>
                            <div className = "card__main-rating">
                                <p className = "card__main-rating-label">Отчет по практике</p>
                                <div className = "card__download-doc">
                                    <label>
                                        <i className = "fa fa-download card__download-doc__icon"></i>
                                        <p className = "card__download-doc__label">Скачать файл</p>
                                    </label>
                                </div> 
                            </div>
                            <textarea 
                                className = "card__comment" 
                                placeholder = "Комментарий"
                                readOnly={true}
                                value={this.state.comment}>
                            </textarea>
                        </div>
                        <div className="card-our-archive">
                            <button className="btn card-our-archive__btn" onClick={onHideModalStudentCardModal}>Закрыть</button>
                        </div>
                    </div>     
                    <RatingTableArchive
                        dataStudent={this.props.dataList.studentModalCardData}
                        visibleRatingTable={this.state.visibleRatingTable}
                        onHideRatingTable={this.onHideRatingTable}
                        ratingTableData={this.state.ratingTable}/>
                </div>
        );
    };
};