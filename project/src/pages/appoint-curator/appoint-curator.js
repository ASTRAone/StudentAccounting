import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input, Item  } from 'semantic-ui-react';

import noavatarcurator from '../img/noavatar-curator.jpg';

import './appoint-curator.css';

export default class AppointCurator extends Component {


    constructor(props){
        super(props);

        this.state = {
            initials: ''
        }
    }

    curatorsMass = [
        {id: 1, initials: "Ф. Ф. Алексеев"},
        {id: 2, initials: "В. Ф. Белов"},
        {id: 3, initials: "Ф. С. Гришенко"},
        {id: 4, initials: "Ф. Ф. Алексеев"},
        {id: 5, initials: "Ф. И. Алексеев"},
        {id: 6, initials: "Ш. Ж. Дубинин"},
        {id: 7, initials: "А. А. Смирнов"},
        {id: 8, initials: "Ф. Ф. Краснов"},
        {id: 9, initials: "Д. Ф. Шахунов"},
    ]

    // Изменить выбор куратора
    onChangeInput = (e) => {
        this.setState({
            initials: e.target.value
        });
    };

    // Выбрать куратора
    attachCurator = () => {
        this.props.addCurator(this.state.initials);

        this.setState({
            initials: ''
        });

        this.props.onHideCuratorCard();
    };

    // Закрыть окно выбора куратора
    onCloseCardCurators = () => {
        this.setState({
            initials: ''
        });

        this.props.onHideCuratorCard();
    };

    render() {

        // Получение всех кураторов
        const curators = this.curatorsMass.map((item, index) => {
            return (
                <option key={index}>{item.initials}</option>
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