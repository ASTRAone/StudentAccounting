import React, { Component } from 'react';

import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import Datetime from 'react-date-picker';
import {connect} from 'react-redux';


import './student-add-form.css';

import {postCreateNewStudent} from '../../_actions/applications'

class StudentAddForm extends Component {

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
            Speciality: {},
            CollegeID: "",
            SpecialityName: "",

            visibleSaveBtn: true
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

        let id;

        switch(event.target.value) {
            case "КГУ": id = 1; break;
            case "Чижова": id = 2; break;
            case "Политех": id = 3; break;
        }

        this.setState({
            College: event.target.value,
            CollegeID: id
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

    // Изменение изображения при создании карточки студента
    editImg = (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
        // onChange(name, reader.result, file.name);

            this.setState({
                profilePic: reader.result
            });
        }
    };

    specialityChange(event) {

        let specialityName = '';

        switch(event.target.name) {
            case "Backend" : specialityName = "Backend"; break;
            case "Frontend" : specialityName = "Frontend"; break;
            case "Testing" : specialityName = "Тестирование"; break;
            case "System_analysis" : specialityName = "Системный анализ"; break;
            case "System_administration" : specialityName = "Системное администрирование"; break;
        }

        this.setState({
            Speciality: {[event.target.name]:event.target.value},
            SpecialityName: specialityName
        });         
    };

    // Добавить студента-практиканта
    addNewStudent = () => {
        console.log(this.state);

        const params = {
            SecondName: this.state.SecondName,
            FirstName: this.state.FirstName,
            Patronymic: this.state.Patronymic,
            institutionId: this.state.CollegeID,
            Speciality: this.state.SpecialityName,
            PracticArea: this.state.Faculty,
            PractiesBegining: this.state.PractiesBegining,
            PractiesEnding: this.state.PractiesEnding,
            Phone: this.state.Phone,
            Email: this.state.Email,
            photo: this.state.profilePic
        }

        // Добавление нового студента через апи
        this.props.postCreateNewStudent(params);

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
            Speciality: {},
            SpecialityName: ""
        });

        this.props.onHideModalWindowAdd();
    };

    render() {

        let path = '';

        if (this.state.profilePic.length === 0) {
            path = require("../img/noavatar.png");

        }   else path = this.state.profilePic;

        if (this.state.SecondName && this.state.FirstName &&
            this.state.Patronymic && this.state.Email && 
            this.state.Phone && this.state.College &&
            this.state.Faculty && this.state.PractiesBegining &&
            this.state.PractiesEnding && this.state.Speciality) {
                this.state.visibleSaveBtn = false
            }   else this.state.visibleSaveBtn = true
        
        const { studentAddModal } = this.props;

        return (
            <Modal 
                open={studentAddModal}>
                <Modal.Content>
                    <form className="student-add-form">
                        <div className="student-add-form__header">
                            <img 
                                className="student-add-form__img"
                                src={path}/>
                            <input 
                                type="file"
                                className="student-input-file"
                                onChange={this.editImg} />
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
                                <button disabled={this.state.visibleSaveBtn} className="btn student-container__btn" onClick={this.addNewStudent}>Добавить</button>
                            </div>
                        </Modal.Actions>
                    </form>
                </Modal.Content>
            </Modal>    
        );
    };
};

const mapStateToProps = (state) => {
    return {
        studentsList: state.applications.studentsList
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        postCreateNewStudent
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(StudentAddForm);