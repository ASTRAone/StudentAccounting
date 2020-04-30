import React, { Component } from 'react';
import { connect } from 'react-redux';

import './students-list.css';

import StudentsListElement from '../students-list-element';
import DeleteApplication from '../../components/delete-application';
import ApplicationSuccessfullyDeleted from '../../components/application-successfully-deleted';
import StudentCard from '../student-card';
import StudentAddForm from '../student-add-form'

import {getStudentsListRequest} from '../../_actions/applications';


export default class StudentsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataList: this.props.studentsList,
            modalDeleteWindow: false,
            idTableStudent: '',
            modalDeleted: false,
            studentCardModal: false,
            studentModalCardData: ''
        }
    }

    componentDidMount () {
        // обращение к серверу

        // данные которые пришли необходимо записать в стейт

        //this.props.getStudentsListRequest();
    }

    componentDidUpdate(prevProps) {
        if (this.state.dataList !== this.props.studentsList) {
            this.setState({
                dataList: this.props.studentsList
            })
        }
    };

    // Показать окно удаления 
    onShowModalWindowDeleted = (id) => {
        this.setState({
            modalDeleteWindow: true,
            idTableStudent: id
        });
    };

    // Скрыть окно удаления
    onHideModalWindowDeleted = () => {
        this.setState({
            modalDeleteWindow: false
        });
    };

    // Подтвердить удаление
    onConfirmDeleted = () => {
        console.log(this.state.idTableStudent)

        this.setState({
            modalDeleteWindow: false,
            modalDeleted: true
        });
    };

    // Закрыть окно подтверждения
    onHideModalDeleted = () => {
        this.setState({
            modalDeleted: false,
            studentCardModal: false
        });
    };

    // Показать карточку студента-практиканта
    onShowModalStudentCardModal = (item) => {
        this.setState({
            studentCardModal: true,
            idTableStudent: item.id,
            studentModalCardData: item,
        });

        console.log(item)
    };

    // Закрыть карточку студента-практиканта
    onHideModalStudentCardModal = () => {
        this.setState({
            studentCardModal: false
        });

        document.body.style.overflowY = 'scroll';
    };
    
    // Показать окно удаление из карточки студента-практиканта
    onShowModalWindowDeletedInCard = () => {
        this.setState({
            modalDeleteWindow: true
        });
    }

    render() {
        
        const items = this.state.dataList.map((item, index)=> {
            return (
                <li className="list-element-block" key={ item.id }>
                    <StudentsListElement 
                            {  ...item } 
                            buttons={this.props.buttons} 
                            idx={index}
                            visibleDelBtn={this.props.visibleDelBtn}
                            onShowModalWindowDeleted={() => this.onShowModalWindowDeleted(item.id)}                            
                            onShowModalStudentCardModal={() => this.onShowModalStudentCardModal(item)}
                            activePage={this.props.activePage}/>
                </li>
            );
        });

        return (
            <React.Fragment>
                <ul className="list">
                    { items }
                    <DeleteApplication 
                            modalDeleteWindow={this.state.modalDeleteWindow}
                            onHideModalWindowDeleted={this.onHideModalWindowDeleted}
                            onConfirmDeleted={this.onConfirmDeleted}/>
                    <ApplicationSuccessfullyDeleted 
                            modalDeleted={this.state.modalDeleted}
                            onHideModalDeleted={this.onHideModalDeleted}/>   
                    <StudentCard 
                            studentCard={this.props.studentCard}
                            studentCardModal={this.state.studentCardModal}
                            onHideModalStudentCardModal={this.onHideModalStudentCardModal}
                            studentModalCardData={this.state.studentModalCardData}
                            onShowModalWindowDeletedInCard={this.onShowModalWindowDeletedInCard}/> 
                    <StudentAddForm
                            studentAddModal={this.props.studentAddModal}
                            onHideModalWindowAdd={this.props.onHideModalWindowAdd}/>                   
                </ul>
            </React.Fragment>
        );
    };
};

