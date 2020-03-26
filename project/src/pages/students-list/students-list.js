import React, { Component } from 'react';

import { connect } from 'react-redux';

import './students-list.css';

import StudentsListElement from '../students-list-element';

import {getStudentsListRequest} from '../../_actions/applications';

class StudentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: this.props.studentsList
        }
    }

    componentDidMount () {
        // обращение к серверу

        // данные которые пришли необходимо записать в стейт
        this.props.getStudentsListRequest();
    }

    componentDidUpdate(prevProps) {
        if (this.state.dataList !== this.props.studentsList) {
            this.setState({
                dataList: this.props.studentsList
            })
        }
    }



    render() {

        console.log(this.props.studentsList);

        const items = this.state.dataList.map((item)=> {

            const { id } = item;
            const { ...rest } = item;

            return (
                <li className="list-element-block" key={ id }>
                    <StudentsListElement { ...rest }/>
                </li>
            );
        });

        return (
            <ul className="list">
                { items }
            </ul>
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
        getStudentsListRequest
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(StudentsList);
