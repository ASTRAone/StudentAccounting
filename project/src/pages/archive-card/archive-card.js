import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';
import StarRatings from 'react-star-ratings';

import RatingTableArchive from '../rating-table-archive';
import CuratorCard from '../curator-card';


import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './archive-card.css';

export default class ArchiveCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.dataList.studentModalCardData.id,
            SecondName: this.props.dataList.studentModalCardData.secondName,
            FirstName: this.props.dataList.studentModalCardData.firstName,
            Patronymic: this.props.dataList.studentModalCardData.patronymic,
            Email: this.props.dataList.studentModalCardData.email,
            Phone: this.props.dataList.studentModalCardData.phone,
            College: this.props.dataList.studentModalCardData.college,
            Faculty: this.props.dataList.studentModalCardData.faculty,
            PractiesBegining: this.props.dataList.studentModalCardData.practiesBegining,
            PractiesEnding: this.props.dataList.studentModalCardData.practiesEnding,
            Speciality: this.props.dataList.studentModalCardData.speciality,
            comment: this.props.dataList.studentModalCardData.comment,
            ratingTable: this.props.dataList.studentModalCardData.ratingTable,
            starRatings: this.props.dataList.studentModalCardData.starRatings,
            Curator: this.props.dataList.studentModalCardData.curator,

            visibleRatingTable: false,
            visibleCuratorCard: false
        }
    }

    getReturnLink = () => {
        const profile = this.props.dataList.studentModalCardData.photo;
        let nameFoo = `${profile}`;
        let path = {noavatar};  

        if (nameFoo) {
            path = require(`../img/${nameFoo}`);
        }

        return path;
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

    // Открыть карту куратора
    onShowCuratorCard = () => {
        this.setState({
            visibleCuratorCard: true
        });
    };

    // Закрыть карту куратора
    onHideCuratorCard = () => {
        this.setState({
            visibleCuratorCard: false
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
                            <img src = {this.getReturnLink()} alt="Фотография студента" className = "card__profile-pic" />
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
                                <img src = {noavatarcurator} alt="Фотография куратора" className = "card__profile-pic card__profile-pic_curator" />
                                <p className = "card__curator__action" onClick={this.onShowRatingTable}>Посмотреть компетенции студента</p>
                                <p className = "card__curator__action-curator" onClick={this.onShowCuratorCard} >Посмотреть информацию о наставнике</p>
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
                    <CuratorCard 
                        visibleCuratorCard={this.state.visibleCuratorCard}
                        onHideCuratorCard={this.onHideCuratorCard}
                        curatorData={this.state.Curator}/>
                </div>
        );
    };
};