import React, { Component } from 'react';

import noavatar from "../img/noavatar.png";
import noavatarcurator from '../img/noavatar-curator.jpg';

import './student-card.css';

export default class StudentCard extends Component {
    render(){
        return(
            <div className = "student-card">
                <div className = "header">
                    <p className = "label">Карточка студента</p>
                    <div className = "controls">
                        <i className = "fa fa-print"></i>
                        <i className = "fa fa-edit"></i>
                        <i className = "fa fa-download"></i>
                        <i className = "fa fa-trash"></i>
                    </div>
                </div>
                <div className = "student">
                    <img src = { noavatar } className = "profile-pic" />
                    <div className = "student-info">
                        <p className = "student-name">Иванов Иван Иванович</p>
                        <div className = "contacts">
                            <i className = "fa fa-envelope"></i>
                            <p className = "student-contact">ivanov@mail.ru</p>
                        </div>
                        <div className = "contacts">
                            <i className="fa fa-mobile contacts__mobile-icon"></i>
                            <p className = "student-contact">+79002345819</p>
                        </div>
                        <div className = "contacts">
                            <p className = "info-label">Учебное заведение:</p>
                            <p className = "info-text">КГУ</p>
                        </div>
                        <div className = "contacts">
                            <p className = "info-label">Факультет, специальность:</p>
                            <p className = "info-text">ИАСТ</p>
                        </div>
                        <div className = "contacts">
                            <p className = "info-label">Сроки практики:</p>
                            <p className = "info-text">1.01.2020 - 16.07.2020</p>
                        </div>
                        <div className = "contacts">
                            <p className = "info-label">Направление деятельности:</p>
                            <p className = "info-text">Разработка</p>
                        </div>
                    </div>
                    <div className = "curator">
                        <img src = { noavatarcurator } className = "profile-pic" />
                        <p className = "curator__action">Посмотреть компетенции студента</p>
                        <p className = "curator__action">Посмотреть информацию о наставнике</p>
                        <button className = "btn curator__choose-button">Назначить куратора</button>
                    </div>
                </div>
                <div className = "rating">
                    <div className = "main-rating">
                        <p className = "main-rating__label">Общая оценка за практику</p>
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
                    <div className = "main-rating">
                        <p className = "main-rating__label">Отчет по практике</p>
                        <div className = "download-doc">
                            <i className = "fa fa-download download-doc__icon"></i>
                            <p className = "download-doc__label">Скачать файл</p>
                        </div> 
                    </div>
                    <textarea className = "comment" placeholder = "Комментарий"></textarea>
                </div>
            </div>
        );
    };
}