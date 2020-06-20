import React, { Component } from 'react';

import './students-list-element.css';
import noavatar from "../img/noavatar.png";

import {connect} from 'react-redux';
import {getListInstitutes} from '../../_actions/applications';

class StudentsListElement extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            institutionsList: this.props.institutesList || [],
        }
    }

    componentDidMount () {
        this.props.getListInstitutes();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.institutesList !== this.props.institutesList) {
            this.setState({
                institutionsList: this.props.institutesList
            });
        }

        console.log(this.props.institutesList)
    }

    // Обработка изображений
    getReturnImage = () => {
        let photo = this.props.photo;
        photo = `${photo}`;
        let photoFoo = noavatar;

        if (photo) {
            photoFoo = `data:image/png;base64,${photo}`
        }

        return photoFoo;
    };

    // Обработка названия учебного заведения
    getReturnNameColledge = () => {
        let nameColledge = "";

        if (this.state.institutionsList.length) {
            this.state.institutionsList.forEach(element => {
                if (element.id === this.props.institutionId) {
                    nameColledge = element.name;
                }
            });
        }

        return nameColledge;
    };

    render(){

        const { id, idx, filingDate, secondName, idCard,
                firstName, patronymic, practicArea, photo,
                institutionId, speciality, practiesBegining, 
                practiesEnding, phone, email, buttons, 
                visibleDelBtn, onShowModalWindowDeleted, 
                onShowModalStudentCardModal, activePage, studentCard, ratingTable } = this.props;

        // Разобраться с датой
        // let date = filingDate.split("-");


        // const { average_mark, conflict, conflict_comment,
        //         educability, educability_comment, initiative, 
        //         initiative_comment, interest, interest_comment,
        //         quality, quality_comment, relationship, 
        //         relationship_comment, responsibility, responsibility_comment } = ratingTable;
        

        let visibleBtnDel = "btn-close none";
        let list_element = "list-element";
        let visibleBtn = "";

        if (visibleDelBtn) {
            visibleBtnDel = "btn-close";
        }

        // if (!average_mark && !conflict && !conflict_comment && !educability && !educability_comment &&
        //     !initiative && !initiative_comment && !interest && !interest_comment &&
        //     !quality && !quality_comment && !relationship && !relationship_comment &&
        //     !responsibility && !responsibility_comment && studentCard === "practic-card") {
        //         visibleBtn = " disabled";
        //     }
        
        return(
            <React.Fragment>
                <div className="container-list-element">
                    <div className="list-element" onClick={onShowModalStudentCardModal}>
                        <div className="list-element__our">
                            <div className = "list-element-identificator">
                                <p className = "list-element-identificator__label">№</p>
                                <p className = "list-element-identificator__number">{activePage*10-10 + idx + 1}</p>
                            </div>
                            <div className = "list-element-date">
                                <p className = "list-element-date__label">Дата заявки</p>
                                <p className = "list-element-date__value">{filingDate.slice(0, 11)}</p>
                            </div>
                        </div>
                        <img src = {this.getReturnImage()} alt="Фотография студента" className = "list__profile-pic" />
                        <p className = "list__name">{ secondName + " " + firstName + " " + patronymic }</p>
                        <div className = "list__info">
                            <div className = "list__contacts__element">
                                <i className="fa fa-envelope"></i>
                                <p className = "list__contacts__text">{ email }</p>
                            </div>
                            <div className = "list__contacts__element">
                                <i className ="fa fa-mobile list__contact-icon"></i>
                                <p className = "list__contacts__text">{ phone }</p>
                            </div>
                        </div>
                        <div className = "list__info">
                            <div className = "list__info-element_institution">
                                <p className = "list__info-label">Учебное заведение:</p>
                                <p className = "list__info-text">{ this.getReturnNameColledge() }</p>
                            </div>
                            <div className = "list__info-element_institution">
                                <p className = "list__info-label">Факультет, специальность:</p>
                                <p className = "list__info-text">{ speciality }</p>
                            </div>
                        </div>
                        <div className = "list__info">
                            <div className = "list__info-element">
                                <p className = "list__info-label">Предполагаемые сроки практики:</p>
                                <p className = "list__info-text">{ practiesBegining + " - " + practiesEnding }</p>
                            </div>
                            <div className = "list__info-element">
                                <p className = "list__info-label">Желаемое направление деятельности:</p>
                                <p className = "list__info-text">{ practicArea }</p>
                            </div>
                        </div>
                    </div>
                    <div className = "list__buttons">
                        {buttons.map((item, index) => {
                            return (
                                <label className="list__buttons-our" key={index}>
                                    <i 
                                        className ={`fa ${item.icon}${visibleBtn}`}
                                        onClick={() => item.change_category(id)}>
                                    </i>
                                    <label className="list__buttons-text">{item.label}</label>
                                </label>
                            );           
                        })}
                    </div>
                </div>
                <div className={visibleBtnDel}>
                    <i className="fa fa-minus-circle" onClick={onShowModalWindowDeleted}></i>
                </div>
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        institutesList: state.applications.institutesList
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        getListInstitutes
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(StudentsListElement);