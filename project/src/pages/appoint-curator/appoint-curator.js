import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input, Item  } from 'semantic-ui-react';

import noavatarcurator from '../img/noavatar-curator.jpg';

import {connect} from 'react-redux';
import {addCurator, getListCurators} from '../../_actions/applications';

import './appoint-curator.css';

class AppointCurator extends Component {


    constructor(props){
        super(props);

        this.state = {
            initials: '',
            curatorID: '',
            curatorsList: this.props.curatorsList || []
        }
    }

    componentDidMount () {
        this.props.getListCurators();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.curatorsList !== this.props.curatorsList) {
            this.setState({
                curatorsList: this.props.curatorsList
            });
        }
    }

    // curatorsMass = [
    //     {id: 1, initials: "Ф. Ф. Алексеев"},
    //     {id: 2, initials: "В. Ф. Белов"},
    //     {id: 3, initials: "Ф. С. Гришенко"},
    //     {id: 4, initials: "Ф. Ф. Алексеев"},
    //     {id: 5, initials: "Ф. И. Алексеев"},
    //     {id: 6, initials: "Ш. Ж. Дубинин"},
    //     {id: 7, initials: "А. А. Смирнов"},
    //     {id: 8, initials: "Ф. Ф. Краснов"},
    //     {id: 9, initials: "Д. Ф. Шахунов"},
    // ]

    // Изменить выбор куратора
    onChangeInput = (e) => {
        
        let idCurator;
        
        this.state.curatorsList.forEach(element => {

            let initials = element.secondName + " " + element.firstName + " " + element.patronymic;

            if (initials === e.target.value) {
                idCurator = element.id
            }
        });

        console.log(idCurator);

        this.setState({
            initials: e.target.value,
            curatorID: idCurator
        });
    };

    // Выбрать куратора
    attachCurator = () => {
        this.props.addCuratorStud(this.state.curatorID);

        const params = {
            studentId: this.props.idStudent,
            mentorId: this.state.curatorID
        }

        this.props.addCurator(params)

        this.setState({
            initials: '',
            curatorID: ''
        });

        this.props.onHideCuratorCard();
    };

    // Закрыть окно выбора куратора
    onCloseCardCurators = () => {
        this.setState({
            initials: '',
            curatorID: ''
        });

        this.props.onHideCuratorCard();
    };

    render() {

        // Получение всех кураторов
        const curators = this.props.curatorsList.map((item, index) => {
            return (
                <option key={index}>{item.secondName + " " + item.firstName + " " + item.patronymic}</option>
            );
        });

        let visibleBtn = true;  

        if (this.state.initials) {
            visibleBtn = false;
        }

        const { visibleCuratorCard, onHideCuratorCard } = this.props;

        return (
            <Modal 
                open={visibleCuratorCard}
                centered>
                <Modal.Content
                    className="curator">        
                    <div className="card-curator-container">
                        <i 
                            className="fa fa-sign-out"
                            onClick={this.onCloseCardCurators}>
                        </i>
                        <div className="ui card">
                            <div className="image">
                                <img alt="Фотография наставника" src={noavatarcurator} />
                            </div>
                            <div className="content">
                                <input 
                                    type="text"
                                    className="content__input"
                                    value={this.state.initials}
                                    list="curators" 
                                    onChange={this.onChangeInput}
                                    placeholder="Выберите куратора"/>
                                <datalist id="curators">
                                    {curators}
                                </datalist>
                            </div>
                        </div>
                        <button 
                            className="btn card-curator-container__btn"
                            disabled={visibleBtn}
                            onClick={this.attachCurator}>
                                Выбрать куратора
                        </button>
                    </div>
                </Modal.Content>
            </Modal>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        studentsList: state.applications.studentsList,
        curatorsList: state.applications.curatorsList
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        addCurator,
        getListCurators
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(AppointCurator);