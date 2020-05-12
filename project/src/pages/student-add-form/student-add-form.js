import React, { Component } from 'react';

import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import Datetime from 'react-date-picker';

import img from '../img/noavatar.png';

import './student-add-form.css';

export default class StudentAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profilePic: "",
            SecondName: "",
            FirstName: "",
            Patronymic: "",
            Email: "",
            Phone: "",
            College: "",
            Faculty: "",
            PractiesBegining: "",
            PractiesEnding: "",
            Speciality: {}
        }

        this.firstNameChange = this.firstNameChange.bind(this);
        this.secondNameChange = this.secondNameChange.bind(this);
        this.patronymicChange = this.patronymicChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.collegeChange = this.collegeChange.bind(this);
        this.facultyChange = this.facultyChange.bind(this);
        this.practiceBeginChange = this.practiceBeginChange.bind(this);
        this.practiceEndChange = this.practiceEndChange.bind(this);
        this.specialityChange = this.specialityChange.bind(this);
        
    }

    firstNameChange(event) {
        this.setState({
            FirstName: event.target.value
        }); 
    };

    secondNameChange(event) {
        this.setState({
            SecondName: event.target.value
        }); 
    };

    patronymicChange(event) {
        this.setState({
            Patronymic: event.target.value
        }); 
    };

    emailChange(event) {
        this.setState({
            Email: event.target.value
        }); 
    };

    phoneChange(event) {
        this.setState({
            Phone: event.target.value
        }); 
    };

    collegeChange(event) {
        this.setState({
            College: event.target.value
        }); 
    };

    facultyChange(event) {
        this.setState({
            Faculty: event.target.value
        }); 
    };

    practiceBeginChange(event) {
        this.setState({
            PractiesBegining: event
        }); 
    };

    practiceEndChange(event) {
        this.setState({
            PractiesEnding: event
        }); 
    };

    specialityChange(event) {
        // const ch1 = document.getElementById("check1");
        // const ch2 = document.getElementById("check2");
        // const ch3 = document.getElementById("check3");
        // const ch4 = document.getElementById("check4");
        // const ch5 = document.getElementById("check5");

        // if(event.target.id === "check1"){
        //     this.setState({
        //         Speciality: "Backend"
        //     });
        // }

        // if(event.target.id === "check2"){
        //     this.setState({
        //         Speciality: "Frontend"
        //     });
        // }

        // if(event.target.id === "check3"){
        //     this.setState({
        //         Speciality: "Тестирование"
        //     });
        // }

        // if(event.target.id === "check4"){
        //     this.setState({
        //         Speciality: "Системный анализ"
        //     });
        // }

        // if(event.target.id === "check5"){
        //     this.setState({
        //         Speciality: "Системное администрирование"
        //     });
        // }

        this.setState({
            Speciality: {[event.target.name]:event.target.value}
        });         
    };

    // Добавить студента-практиканта
    addNewStudent = () => {
        console.log(this.state);

        this.setState({
            profilePic: "",
            SecondName: "",
            FirstName: "",
            Patronymic: "",
            Email: "",
            Phone: "",
            College: "",
            Faculty: "",
            PractiesBegining: "",
            PractiesEnding: "",
            Speciality: {}
        });

        this.props.onHideModalWindowAdd();
    };

    // Отмена добавления студента
    cancelAddStudent = () => {
        this.setState({
            profilePic: "",
            SecondName: "",
            FirstName: "",
            Patronymic: "",
            Email: "",
            Phone: "",
            College: "",
            Faculty: "",
            PractiesBegining: "",
            PractiesEnding: "",
            Speciality: {}
        });

        this.props.onHideModalWindowAdd();
    };


    render() {
        
        const { studentAddModal } = this.props;

        return (
            <Modal 
                open={studentAddModal}>
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
                                        onChange={this.secondNameChange}
                                        placeholder="Фамилия*" />

                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        value={this.state.FirstName}
                                        onChange={this.firstNameChange}
                                        placeholder="Имя*"  />

                                    <input 
                                        type="text" 
                                        className="from-our__item" 
                                        value={this.state.Patronymic}
                                        onChange={this.patronymicChange}
                                        placeholder="Отчество"  />

                                    <input 
                                        list="institution" 
                                        className="from-our__item"
                                        value={this.state.College}
                                        onChange={this.collegeChange}
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
                                        onChange={this.facultyChange}
                                        placeholder="Факультет, специальность*" />
                                        
                                    <h4 className="from-our__title">Направление практики*</h4>
                                    <div className="from-our__checkbox">
                                        <input 
                                            type="checkbox" 
                                            id="check1" 
                                            onChange={this.specialityChange}
                                            checked={this.state.Speciality.Backend}
                                            name="Backend"/> 
                                        <label htmlFor="check1">Backend</label>
                                    </div>
                                    
                                    <div className="from-our__checkbox">
                                        <input 
                                            type="checkbox" 
                                            id="check2" 
                                            onChange={this.specialityChange}
                                            checked={this.state.Speciality.Frontend}
                                            name="Frontend"/> 
                                        <label htmlFor="check2">Frontend</label>
                                    </div>
                                    <div className="from-our__checkbox">
                                        <input 
                                            type="checkbox" 
                                            id="check3" 
                                            onChange={this.specialityChange}
                                            checked={this.state.Speciality.Testing}
                                            name="Testing"/> 
                                        <label htmlFor="check3">Тестирование</label>
                                    </div>
                                    <div className="from-our__checkbox">
                                        <input 
                                            type="checkbox" 
                                            id="check4" 
                                            onChange={this.specialityChange}
                                            checked={this.state.Speciality.System_analysis}
                                            name="System_analysis"/> 
                                        <label htmlFor="check4">Системный анализ</label>
                                    </div>
                                    <div className="from-our__checkbox">
                                        <input 
                                            type="checkbox" 
                                            id="check5" 
                                            onChange={this.specialityChange}
                                            checked={this.state.Speciality.System_administration}
                                            name="System_administration"/> 
                                        <label htmlFor="check5">Системное администрирование</label>
                                    </div>
                                </div>
                                <div className="from-practic">
                                    <h4 className="from-practic__title">Предполагаемые сроки практики*</h4>
                                    <div className="from-practic__date">
                                        <div className="from-practic__checkbox">
                                            <label className="from-practic__label" htmlFor="pract-begin">с</label>                                
                                            <Datetime  
                                                id="pract-begin" 
                                                className="from-practic__item"
                                                placeholderText="Выбрать..." 
                                                value={this.state.PractiesBegining}
                                                onChange={this.practiceBeginChange}/>                          
                                        </div>
                                        <div className="from-practic__checkbox">
                                            <label className="from-practic__label" htmlFor="pract-end">по</label>
                                            <Datetime  
                                                id="pract-end" 
                                                className="from-practic__item" 
                                                placeholderText="Выбрать..."
                                                value={this.state.PractiesEnding}
                                                onChange={this.practiceEndChange}/>                          
                                        </div>
                                    </div>
                                    <div className="from-practic__date from-practic__communication">
                                        <h4 className="from-practic__title from-practic__title_bottom">Данные связи*</h4>
                                        <div className="from-practic__checkbox_bottom from-practic__checkbox_bottom-first">
                                            <i className="fa fa-mobile"></i>
                                            <InputMask 
                                                type="tel"
                                                id="phone-input" 
                                                className="from-practic__item" 
                                                mask="+7\ (999) 999-99-99" 
                                                maskChar=" "
                                                value={this.state.Phone}
                                                onChange={this.phoneChange}/>                         
                                        </div>
                                        <div className="from-practic__checkbox_bottom">  
                                            <i className="from-practic_bottom-i fa fa-envelope"></i>  
                                            <input 
                                                type="email" 
                                                id="email-input" 
                                                className="from-practic__item" 
                                                value={this.state.Email}
                                                onChange={this.emailChange}/>                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="student-container__text">* - поля обязательного заполнения</p>
                        </div>   
                        <Modal.Actions>
                            <div className="student-container__our-btn"> 
                                <button className="btn student-container__btn" onClick={this.cancelAddStudent}>Отмена</button>
                                <button className="btn student-container__btn" onClick={this.addNewStudent}>Добавить</button>
                            </div>
                        </Modal.Actions>
                    </form>
                </Modal.Content>
            </Modal>    
        );
    };
};