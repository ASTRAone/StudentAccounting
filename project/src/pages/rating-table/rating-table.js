import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';

import './rating-table.css';

export default class RatingTable extends Component{

    constructor(props) {
        super(props);

        this.state = {
            SecondName: this.props.dataStudent.SecondName,
            FirstName: this.props.dataStudent.FirstName,
            Patronymic: this.props.dataStudent.Patronymic
        }
    }

    render(){

        const { visibleRatingTable, onHideRatingTable } = this.props;

        return(
            <Modal
                open={visibleRatingTable}>    
                <div className = "rating-table">
                    <div className = "rating-header">

                        <p className = "rating-header__label">ФИО студента: </p>
                        <p> {this.state.SecondName + " " + this.state.FirstName + " " + this.state.Patronymic}</p>
                        
                        <p className = "rating-header__label">Дата</p>
                        <div className = "rating-buttons">
                            <i className = "fa fa-print"></i>
                            <i className = "fa fa-edit"></i>
                            <i className = "fa fa-download"></i>
                            <i className = "fa fa-trash"></i>
                        </div>
                    </div>
                    <div className = "rating-table-block">
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Критерии</span>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <span className = "rating-table-block__span">Оценка</span>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <span className = "rating-table-block__span">Заметка</span>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Обучаемость</span>
                            <p className = "rating-table-block__text">(способность усвоить и применить на практике максимум знаний в минимальные сроки)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea className = "rating-table-block__textarea-mark"></textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea className = "rating-table-block__textarea-comment"></textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Качество</span>
                            <p className = "rating-table-block__text">(тщательность и аккуратность выполнения работы, независимо от количества)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea className = "rating-table-block__textarea-mark"></textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea className = "rating-table-block__textarea-comment"></textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Ответственность</span>
                            <p className = "rating-table-block__text">(исполнение обязанностей в срок с минимумом контроля)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea className = "rating-table-block__textarea-mark"></textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea className = "rating-table-block__textarea-comment"></textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Инициативность</span>
                            <p className = "rating-table-block__text">(говоря о проблемах, предлагает варианты решения)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea className = "rating-table-block__textarea-mark"></textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea className = "rating-table-block__textarea-comment"></textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Конфликтность</span>
                            <p className = "rating-table-block__text">(конструктивное восприятие критики, способность тактично обсудить неприятный вопрос)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea className = "rating-table-block__textarea-mark"></textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea className = "rating-table-block__textarea-comment"></textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Взаимоотношения с окружающими</span>
                            <p className = "rating-table-block__text">(легко идет на контакт, умеет наладить горизонтальные и вертикальные связи)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea className = "rating-table-block__textarea-mark"></textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea className = "rating-table-block__textarea-comment"></textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Интерес к работе</span>
                            <p className = "rating-table-block__text">(видит перспективы, возможности реализации, ему нравится содержание работы)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea className = "rating-table-block__textarea-mark"></textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea className = "rating-table-block__textarea-comment"></textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Итоговая оценка</span>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea className = "rating-table-block__textarea-mark"></textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea className = "rating-table-block__textarea-comment"></textarea>
                        </div>
                    </div>
                    <div className = "rating-table-buttons">
                        <button className = "rating-table-buttons__button" onClick={onHideRatingTable}>Отменить</button>
                        <button className = "rating-table-buttons__button">Сохранить</button>
                    </div>
                </div>
            </Modal>
        );
    };
};
