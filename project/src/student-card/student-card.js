import React, { Component } from 'react';

import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './student-card.css';

export default class StudentCard extends Component {
    render(){
        return(
            <div className = "student-card">
                <div className = "card__header">
                    <p className = "card__label">Карточка студента</p>
                    <div className = "card__controls">
                        <i className = "fa fa-print"></i>
                        <i className = "fa fa-edit"></i>
                        <i className = "fa fa-download"></i>
                        <i className = "fa fa-trash"></i>
                    </div>
                </div>
                <div className = "card__student">
                    <img src = { noavatar } className = "card__profile-pic" />
                    <div className = "card__student-info">
                        <p className = "card__student-name">Иванов Иван Иванович</p>
                        <div className = "card__contacts">
                            <i className = "fa fa-envelope"></i>
                            <p className = "card__student-contact">ivanov@mail.ru</p>
                        </div>
                        <div className = "card__contacts">
                            <i className="fa fa-mobile card__contacts-mobile-icon"></i>
                            <p className = "card__student-contact">+79002345819</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Учебное заведение:</p>
                            <p className = "card__info-text">КГУ</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Факультет, специальность:</p>
                            <p className = "card__info-text">ИАСТ</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Сроки практики:</p>
                            <p className = "card__info-text">1.01.2020 - 16.07.2020</p>
                        </div>
                        <div className = "card__contacts">
                            <p className = "card__info-label">Направление деятельности:</p>
                            <p className = "card__info-text">Разработка</p>
                        </div>
                    </div>
                    <div className = "card__curator">
                        <img src = { noavatarcurator } className = "card__profile-pic" />
                        <p className = "card__curator__action">Посмотреть компетенции студента</p>
                        <p className = "card__curator__action">Посмотреть информацию о наставнике</p>
                        <button className = "card__curator__choose-button">Назначить куратора</button>
                    </div>
                </div>
                <div className = "card__rating">
                    <div className = "card__main-rating">
                        <p className = "card__main-rating-label">Общая оценка за практику</p>
                        <div className = "stars">
                            <div id="reviewStars-input">
	                            <input id="star-4" type="radio" name="reviewStars"/>
	                            <label title="отлично" htmlFor="star-4"></label>

	                            <input id="star-3" type="radio" name="reviewStars"/>
	                            <label title="хорошо" htmlFor="star-3"></label>

	                            <input id="star-2" type="radio" name="reviewStars"/>
	                            <label title="удовлетворительно" htmlFor="star-2"></label>

	                            <input id="star-1" type="radio" name="reviewStars"/>
	                            <label title="неудовлетворительно" htmlFor="star-1"></label>

	                            <input id="star-0" type="radio" name="reviewStars"/>
	                            <label title="плохо" htmlFor="star-0"></label>
                            </div>
                        </div>
                    </div>
                    <div className = "card__main-rating">
                        <p className = "card__main-rating-label">Отчет по практике</p>
                        <div className = "card__download-doc">
                            <i className = "fa fa-download card__download-doc__icon"></i>
                            <p className = "card__download-doc__label">Скачать файл</p>
                        </div> 
                    </div>
                    <textarea className = "card__comment" placeholder = "Комментарий"></textarea>
                </div>
            </div>
        );
    };
}