import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';

import './rating-table.css';

export default class RatingTable extends Component{

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

            editTablerating: true,

            date: new Date()
        }


    }

    // Редактирование рейтинговой таблицы студента
    editRatingTable = () => {
        this.setState({
            editTablerating: false
        });
    };

    // Редактирование оценки обучаемости
    editEducability = (e) => {
        this.setState({
            educability: Number(e.target.value)
        });

        if (e.target.value === '' || e.target.value > 5 || e.target.value < 2) {
            this.setState({
                educability: ''
            });
        }
    };

    // Редактирование комментария обучаемости
    editEducabilityComment = (e) => {
        this.setState({
            educability_com: e.target.value
        });
    };

    // Редактирование оценки качества
    editQuality = (e) => {
        this.setState({
            quality: Number(e.target.value)
        });
        
        if (e.target.value === '' || e.target.value > 5 || e.target.value < 2) {
            this.setState({
                quality: ''
            });
        }
    };

    // Редактирование комментария качества
    editQualityComment = (e) => {
        this.setState({
            quality_com: e.target.value
        });
    }

    // Редактирование оценки ответственности
    editResponsibility = (e) => {
        this.setState({
            responsibility: Number(e.target.value)
        });
        
        if (e.target.value === '' || e.target.value > 5 || e.target.value < 2) {
            this.setState({
                responsibility: ''
            });
        }
    };

    // Редактирование комментария ответственности
    editResponsibilityComment = (e) => {
        this.setState({
            responsibility_com: e.target.value
        });
    };

    // Редактирование оценки инициативности
    editInitiative = (e) => {
        this.setState({
            initiative: Number(e.target.value)
        });
        
        if (e.target.value === '' || e.target.value > 5 || e.target.value < 2) {
            this.setState({
                initiative: ''
            });
        }
    };

    // Редактирование комментария инициативности
    editInitiativeComment = (e) => {
        this.setState({
            initiative_com: e.target.value
        });
    };

    // Редактирование оценки конфликтности
    editConflict = (e) => {
        this.setState({
            conflict: Number(e.target.value)
        });
        
        if (e.target.value === '' || e.target.value > 5 || e.target.value < 2) {
            this.setState({
                conflict: ''
            });
        }
    };

    // Редактирование комментария конфликтности
    editConflictComment = (e) => {
        this.setState({
            conflict_com: e.target.value
        });
    };

    // Редактирование оценки взамоотношения
    editRelationship = (e) => {
        this.setState({
            relationship: Number(e.target.value)
        });
        
        if (e.target.value === '' || e.target.value > 5 || e.target.value < 2) {
            this.setState({
                relationship: ''
            });
        }
    };

    // Редактирование комментария взамоотношения
    editRelationshipComment = (e) => {
        this.setState({
            relationship_com: e.target.value
        });
    };

    // Редактирование оценки интереса к работе
    editInterest = (e) => {
        this.setState({
            interest: Number(e.target.value)
        });
        
        if (e.target.value === '' || e.target.value > 5 || e.target.value < 2) {
            this.setState({
                interest: ''
            });
        }
    };

    // Редактирование комментария интереса к работе
    editInterestComment = (e) => {
        this.setState({
            interest_com: e.target.value
        });
    };

    // Удаление рейтинговой таблицы студента
    onDeletedRatingTable = () => {
        this.setState({
            educability: '',
            educability_com: '',
            quality: '',
            quality_com: '',
            responsibility: '',
            responsibility_com: '',
            initiative: '',
            initiative_com: '',
            conflict: '',
            conflict_com: '',
            relationship: '',
            relationship_com: '',
            interest: '',
            interest_com: ''
        });
    };

    // Редактирование итоговой оценки
    editAverageMark = (e) => {
        this.setState({
            average_mark: e.target.value
        });
    };

    // Отмена редактирования рейтинговой таблицы студента
    discardСhangeRatingTable = () => {
        this.setState({
            educability: this.props.ratingTableData.educability,
            educability_com: this.props.ratingTableData.educability_comment,
            quality: this.props.ratingTableData.quality,
            quality_com: this.props.ratingTableData.quality_comment,
            responsibility: this.props.ratingTableData.responsibility,
            responsibility_com: this.props.ratingTableData.responsibility_comment,
            initiative: this.props.ratingTableData.initiative,
            initiative_com: this.props.ratingTableData.initiative_comment,
            conflict: this.props.ratingTableData.conflict,
            conflict_com: this.props.ratingTableData.conflict_comment,
            relationship: this.props.ratingTableData.relationship,
            relationship_com: this.props.ratingTableData.relationship_comment,
            interest: this.props.ratingTableData.interest,
            interest_com: this.props.ratingTableData.interest_comment,
            average_mark: this.props.ratingTableData.average_mark,
            editTablerating: true
        });

        this.props.onHideRatingTable();
    };

    // Сохранение изменений
    onSaveChange = () => {
        this.setState({
            editTablerating: true
        });

        this.props.onHideRatingTable();
        this.props.onSaveTableRatingTable(this.state);
    };

    render(){

        const { visibleRatingTable, dataStudent } = this.props;
        const { SecondName, FirstName, Patronymic } = dataStudent; 

        return(
            <Modal
                open={visibleRatingTable}>    
                <div className = "rating-table">
                    <div className = "rating-header">
                        <p className = "rating-header__label">{SecondName + " " + FirstName + " " + Patronymic}</p>                        
                        <p className = "rating-header__label">{ this.state.date.getDate() + " " + (this.state.date.getMonth() + 1) + " " + this.state.date.getFullYear() }</p>
                        <div className = "rating-buttons">
                            <i className = "fa fa-print"></i>
                            <i className = "fa fa-edit" onClick={this.editRatingTable}></i>
                            <i className = "fa fa-download"></i>
                            <i className = "fa fa-trash" onClick={this.onDeletedRatingTable}></i>
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
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.educability}
                                onChange={this.editEducability}
                                maxLength="1"
                                min="2"
                                max="5">        
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.educability_com}
                                onChange={this.editEducabilityComment}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Качество</span>
                            <p className = "rating-table-block__text">(тщательность и аккуратность выполнения работы, независимо от количества)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.quality}
                                onChange={this.editQuality}
                                maxLength="1"
                                min="2"
                                max="5">
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.quality_com}
                                onChange={this.editQualityComment}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Ответственность</span>
                            <p className = "rating-table-block__text">(исполнение обязанностей в срок с минимумом контроля)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.responsibility}
                                onChange={this.editResponsibility}
                                maxLength="1"
                                min="2"
                                max="5">
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.responsibility_com}
                                onChange={this.editResponsibilityComment}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Инициативность</span>
                            <p className = "rating-table-block__text">(говоря о проблемах, предлагает варианты решения)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.initiative}
                                onChange={this.editInitiative}
                                maxLength="1"
                                min="2"
                                max="5">
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.initiative_com}
                                onChange={this.editInitiativeComment}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Конфликтность</span>
                            <p className = "rating-table-block__text">(конструктивное восприятие критики, способность тактично обсудить неприятный вопрос)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.conflict}
                                onChange={this.editConflict}
                                maxLength="1"
                                min="2"
                                max="5">
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.conflict_com}
                                onChange={this.editConflictComment}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Взаимоотношения с окружающими</span>
                            <p className = "rating-table-block__text">(легко идет на контакт, умеет наладить горизонтальные и вертикальные связи)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.relationship}
                                onChange={this.editRelationship}
                                maxLength="1"
                                min="2"
                                max="5">
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea   
                                type="text"
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.relationship_com}
                                onChange={this.editRelationshipComment}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Интерес к работе</span>
                            <p className = "rating-table-block__text">(видит перспективы, возможности реализации, ему нравится содержание работы)</p>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea 
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-mark"
                                value={this.state.interest}
                                onChange={this.editInterest}
                                maxLength="1"
                                min="2"
                                max="5">
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                type="text"
                                readOnly={this.state.editTablerating}
                                className = "rating-table-block__textarea-comment"
                                value={this.state.interest_com}
                                onChange={this.editInterestComment}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__criterion-cell">
                            <span className = "rating-table-block__span">Итоговая оценка</span>
                        </div>
                        <div className = "rating-table-block__mark-cell">
                            <textarea   
                                readOnly="true"
                                className = "rating-table-block__textarea-mark"
                                value={Math.round((Number(this.state.educability) + Number(this.state.quality) + 
                                                  Number(this.state.responsibility) + Number(this.state.initiative) + 
                                                  Number(this.state.conflict) + Number(this.state.relationship) + 
                                                  Number(this.state.interest)) / 7)}
                                onChange={this.editAverageMark}>
                            </textarea>
                        </div>
                        <div className = "rating-table-block__comment-cell">
                            <textarea 
                                className = "rating-table-block__textarea-comment"
                                readOnly={this.state.editTablerating}>
                            </textarea>
                        </div>
                    </div>
                    <div className = "rating-table-buttons">
                        <button className = "rating-table-buttons__button" onClick={this.discardСhangeRatingTable}>Отменить</button>
                        <button className = "rating-table-buttons__button" onClick={this.onSaveChange}>Сохранить</button>
                    </div>
                </div>
            </Modal>
        );
    };
};
