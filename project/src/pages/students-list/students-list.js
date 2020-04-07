import React, { Component } from 'react';
import { connect } from 'react-redux';

import './students-list.css';

import StudentsListElement from '../students-list-element';
import {getStudentsListRequest} from '../../_actions/applications';


export default class StudentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: this.props.studentsList,

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
                            />
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

