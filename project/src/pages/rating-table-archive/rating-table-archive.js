import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';

import './rating-table-archive.css';

export default class RatingTableArchive extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Обучаемость
            educability: this.props.ratingTableData.educability,
            educability_com: this.props.ratingTableData.educability_comment,
            // Качество
            quality: this.props.ratingTableData.quality,
            quality_com: this.props.ratingTableData.quality_comment,
            // Ответстенность
            responsibility: this.props.ratingTableData.responsibility,
            responsibility_com: this.props.ratingTableData.responsibility_comment,
            // Инициативность
            initiative: this.props.ratingTableData.initiative,
            initiative_com: this.props.ratingTableData.initiative_comment,
            // Конфликтность
            conflict: this.props.ratingTableData.conflict,
            conflict_com: this.props.ratingTableData.conflict_comment,
            // Взаимоотношения с окружающими
            relationship: this.props.ratingTableData.relationship,
            relationship_com: this.props.ratingTableData.relationship_comment,
            // Интерес к работе
            interest: this.props.ratingTableData.interest,
            interest_com: this.props.ratingTableData.interest_comment,
            // Итоговая оценка
            average_mark: this.props.ratingTableData.average_mark,
        }
    }

    render() {

        const { onHideRatingTable, dataStudent, visibleRatingTable } = this.props;

        return (
            <Modal
                open={visibleRatingTable}>    
                <div className = "rating-table">
                    <div className = "rating-header">
                        <p className = "rating-header__label">{dataStudent.SecondName + " " + dataStudent.FirstName + " " + dataStudent.Patronymic}</p>                        
                        <p className = "rating-header__label">{ new Date().getDay() + " " + new Date().getMonth() + " " + new Date().getFullYear() }</p>
                        <div className = "rating-buttons__our">
                            <i className = "fa fa-print"></i>
                            {/* <i className = "fa fa-edit" onClick={this.editRatingTable}></i> */}
                            <i className = "fa fa-download"></i>
                            {/* <i className = "fa fa-trash"></i> */}
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
                            <textarea 
                                type="text"
                                readOnly={true}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.educability}>        
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={true}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.educability_com}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Качество</span>
                            <p className = "rating-table-block__text">(тщательность и аккуратность выполнения работы, независимо от количества)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={true}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.quality}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={true}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.quality_com}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Ответственность</span>
                            <p className = "rating-table-block__text">(исполнение обязанностей в срок с минимумом контроля)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={true}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.responsibility}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={true}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.responsibility_com}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Инициативность</span>
                            <p className = "rating-table-block__text">(говоря о проблемах, предлагает варианты решения)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={true}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.initiative}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={true}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.initiative_com}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Конфликтность</span>
                            <p className = "rating-table-block__text">(конструктивное восприятие критики, способность тактично обсудить неприятный вопрос)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={true}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.conflict}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={true}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.conflict_com}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Взаимоотношения с окружающими</span>
                            <p className = "rating-table-block__text">(легко идет на контакт, умеет наладить горизонтальные и вертикальные связи)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={true}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.relationship}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea   
                                type="text"
                                readOnly={true}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.relationship_com}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Интерес к работе</span>
                            <p className = "rating-table-block__text">(видит перспективы, возможности реализации, ему нравится содержание работы)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={true}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.interest}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={true}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.interest_com}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Итоговая оценка</span>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea   
                                readOnly={true}
                                className = "rating-table-block__textarea-mark"
                                value={Math.round((Number(this.state.educability) + Number(this.state.quality) + 
                                                   Number(this.state.responsibility) + Number(this.state.initiative) + 
                                                   Number(this.state.conflict) + Number(this.state.relationship) + 
                                                   Number(this.state.interest)) / 7)}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                className = "rating-table-block__textarea-comment"
                                readOnly="true">
                            </textarea>
                        </div>
                    </div>
                    <div className = "rating-table-buttons__our">
                        <button 
                            className = "rating-table-buttons__button" 
                            onClick={onHideRatingTable}>
                                Закрыть
                        </button>
                    </div>
                </div>
            </Modal>
        );
    };
};