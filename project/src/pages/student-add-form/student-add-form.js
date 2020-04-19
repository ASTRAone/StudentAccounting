import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import img from '../img/noavatar.png';

import './student-add-form.css';

export default class StudentAddForm extends Component {

    render() {
        
        const {studentAddModal, onHideModalWindowAdd} = this.props;

        return (
            <Modal 
                open={studentAddModal} 
                basic 
                size='small'>
                <Modal.Content>
                    <form className="student-add-form">
                        <div className="student-add-form__header">
                            <img src={ img } />
                            <h3 className="student-add-form__title">Добавление студента</h3>
                        </div>  
                        <div className="student-container">
                            <div className="from-our">
                                <div className="from-our__input">
                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        placeholder="Фамилия*" />

                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        placeholder="Имя*"  />

                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        placeholder="Отчество"  />

                                    <input 
                                        list="institution" 
                                        className="from-our__item"
                                        placeholder="Учебное заведение*"/>

                                    <datalist id="institution">
                                        <option>КГУ</option>
                                        <option>Политех</option>
                                        <option>Чижова</option>
                                    </datalist>   

                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        placeholder="Факультет, специальность*" />
                                        
                                    <h4 className="from-our__title">Направление практики*</h4>
                                    <div className="from-our__checkbox">
                                        <input type="checkbox" id="check1" /> 
                                        <label htmlFor="check1">Backend</label>
                                    </div>
                                    <div className="from-our__checkbox">
                                        <input type="checkbox" id="check2" /> 
                                        <label htmlFor="check2">Frontend</label>
                                    </div>
                                    <div className="from-our__checkbox">
                                        <input type="checkbox" id="check3" /> 
                                        <label htmlFor="check3">Тестирование</label>
                                    </div>
                                    <div className="from-our__checkbox">
                                        <input type="checkbox" id="check4" /> 
                                        <label htmlFor="check4">Системный анализ</label>
                                    </div>
                                    <div className="from-our__checkbox">
                                        <input type="checkbox" id="check5" /> 
                                        <label htmlFor="check5">Системное администрирование</label>
                                    </div>
                                </div>
                                <div className="from-practic">
                                    <h4 className="from-practic__title">Предполагаемые сроки практики*</h4>
                                    <div className="from-practic__date">
                                        <div className="from-practic__checkbox">
                                            <label htmlFor="check5">с</label>
                                            <i className="fa fa-calendar"></i>
                                            <input type="text" id="check5" className="from-practic__item datepicker-here" />                         
                                        </div>
                                        <div className="from-practic__checkbox">
                                            <label htmlFor="check5">по</label>
                                            <i className="fa fa-calendar"></i>
                                            <input type="text" id="check5" className="from-practic__item datepicker-here" />                         
                                        </div>
                                    </div>
                                    <div className="from-practic__date from-practic__communication">
                                        <h4 className="from-practic__title from-practic__title_bottom">Данные связи*</h4>
                                        <div className="from-practic__checkbox_bottom">
                                            <i className="fa fa-mobile"></i>
                                            <input type="number" id="check5" className="from-practic__item" />                         
                                        </div>
                                        <div className="from-practic__checkbox_bottom">  
                                            <i className="from-practic_bottom-i fa fa-envelope"></i>  
                                            <input type="email" id="check5" className="from-practic__item" />                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="student-container__text">* - поля обязательного заполнения</p>
                        </div>   
                        <Modal.Actions>
                            <div className="student-container__our-btn"> 
                                <button className="btn student-container__btn" onClick={onHideModalWindowAdd}>Отмена</button>
                                <button className="btn student-container__btn" onClick={onHideModalWindowAdd}>Добавить</button>
                            </div>
                        </Modal.Actions>
                    </form>
                </Modal.Content>
            </Modal>    
        );
    };
};