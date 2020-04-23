import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import img from '../img/noavatar.png';

import './student-add-form.css';

export default class StudentAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            SecondName: "",
            FirstName: "",
            Patronymic: "",
            Email: "",
            Phone: "",
            College: "",
            Faculty: "",
            PractiesBegining: "",
            PractiesEnding: "",
            Speciality: ""
        }
    }

    firstNameChange(e) {
        this.setState({
            FirstName: e.target.value
        }); 
    };

    secondNameChange(e) {
        this.setState({
            SecondName: e.target.value
        }); 
    };

    patronymicChange(e) {
        this.setState({
            Patronymic: e.target.value
        }); 
    };

    emailChange(e) {
        this.setState({
            Email: e.target.value
        }); 
    };

    phoneChange(e) {
        this.setState({
            Phone: e.target.value
        }); 
    };

    collegeChange(e) {
        this.setState({
            College: e.target.value
        }); 
    };

    facultyChange(e) {
        this.setState({
            Faculty: e.target.value
        }); 
    };

    practiceBeginChange(e) {
        this.setState({
            PractiesBegining: e.target.value
        }); 
    };

    practiceEndChange(e) {
        this.setState({
            PractiesEnding: e.target.value
        }); 
    };

    specialityChange(e) {
        if(e.target.id === "check1"){
            this.setState({
                Speciality: "Backend"
            });
        }

        if(e.target.id === "check2"){
            this.setState({
                Speciality: "Frontend"
            });
        }

        if(e.target.id === "check3"){
            this.setState({
                Speciality: "Тестирование"
            });
        }

        if(e.target.id === "check4"){
            this.setState({
                Speciality: "Системный анализ"
            });
        }

        if(e.target.id === "check5"){
            this.setState({
                Speciality: "Системное администрирование"
            });
        }
         
    };

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
                                        value={this.state.SecondName}
                                        onClick={this.secondNameChange}
                                        placeholder="Фамилия*" />

                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        value={this.state.FirstName}
                                        onClick={this.firstNameChange}
                                        placeholder="Имя*"  />

                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        value={this.state.Patronymic}
                                        onClick={this.patronymicChange}
                                        placeholder="Отчество"  />

                                    <input 
                                        list="institution" 
                                        className="from-our__item"
                                        value={this.state.College}
                                        onClick={this.collegeChange}
                                        placeholder="Учебное заведение*"/>

                                    <datalist id="institution">
                                        <option>КГУ</option>
                                        <option>Политех</option>
                                        <option>Чижова</option>
                                    </datalist>   

                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        value={this.state.Faculty}
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
                                            <input type="text" id="check5" 
                                            className="from-practic__item datepicker-here" 
                                            value={this.state.PractiesBegining}
                                            onClick={this.practiceBeginChange}/>                         
                                        </div>
                                        <div className="from-practic__checkbox">
                                            <label htmlFor="check5">по</label>
                                            <i className="fa fa-calendar"></i>
                                            <input type="text" 
                                            id="check5" 
                                            className="from-practic__item datepicker-here" 
                                            value={this.state.PractiesEnding}
                                            onClick={this.practiceEndChange}/>                         
                                        </div>
                                    </div>
                                    <div className="from-practic__date from-practic__communication">
                                        <h4 className="from-practic__title from-practic__title_bottom">Данные связи*</h4>
                                        <div className="from-practic__checkbox_bottom">
                                            <i className="fa fa-mobile"></i>
                                            <input type="number" 
                                            id="check5" 
                                            className="from-practic__item" 
                                            value={this.state.Phone}
                                            onClick={this.phoneChange}
                                            />                         
                                        </div>
                                        <div className="from-practic__checkbox_bottom">  
                                            <i className="from-practic_bottom-i fa fa-envelope"></i>  
                                            <input type="email" 
                                            id="check5" 
                                            className="from-practic__item" 
                                            value={this.state.Email}
                                            onClick={this.emailChange}/>                         
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