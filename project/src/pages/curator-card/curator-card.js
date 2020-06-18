import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';

import noavatarcurator from '../img/noavatar-curator.jpg';

import './curator-card.css';

import {connect} from 'react-redux';
import {getListCurators} from '../../_actions/applications';

class CuratorCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
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

    // Получение инициалов куратора
    getReturnNameCurators = () => {
        let nameCurator = "";

        if (this.state.curatorsList.length) {
            this.state.curatorsList.forEach(element => {
                if (element.id === this.props.CuratorId) {
                    nameCurator = element.secondName + " " + element.firstName + " " + element.patronymic;
                } else {
                    nameCurator = "Имя не определено"
                }
            });
        }
        
        return nameCurator;
    };

    render() {

        const { visibleCuratorCard, onHideCuratorCard } = this.props;

        

        // let intialsCurator = curatorData;

        // if (curatorData.length === 0) {
        //     intialsCurator = "Ошибка отображения куратора";
        // }

        return (
            <Modal 
                open={visibleCuratorCard}
                centered>
                <Modal.Content
                    className="curator">        
                    <div className="card-curator-container">
                        <i 
                            className="fa fa-sign-out"
                            onClick={onHideCuratorCard}>
                        </i>
                        <div className="ui card">
                            <div className="image">
                                <img alt="Фотография наставника" src={noavatarcurator} />
                            </div>
                            <div className="content">
                                <div className="header">{this.getReturnNameCurators()}</div>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
            </Modal>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        curatorsList: state.applications.curatorsList
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        getListCurators
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(CuratorCard);