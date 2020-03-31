import React, { Component } from 'react';

import { connect } from 'react-redux';

import './students-list.css';

import StudentsListElement from '../students-list-element';
import StudentsListElementApproved from '../students-list-element/students-list-element-approved';
import StudentsListElementRejected from '../students-list-element/students-list-element-rejected';
import StudentsListElementOnPractice from '../students-list-element/students-list-element-on-practice';
import StudentsListElementArchive from '../students-list-element/students-list-element-archive';

import {getStudentsListRequest} from '../../_actions/applications';


class StudentsList extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            dataList: this.props.studentsList,
           
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

    

    // getRequest() {
    //     const items = this.state.dataList.map((item)=> {

    //         const { id, request, approved, onPractice, inArchive } = item;
    //         const { ...rest } = item;

    //         const visible = request ? <StudentsListElement { ...rest }/>: null;
    //         console.log({visible});
    //         return (
    //             <li className="list-element-block" key={ id }>
    //                 {visible}
    //             </li>
    //         );
    //     });
    // }



    render() {

        console.log(this.props.studentsList);
        console.log(window.location.pathname);

        const items = this.state.dataList.map((item)=> {

            const { id, request, approved, rejected, onPractice, inArchive } = item;
            const { ...rest } = item;
            if (window.location.pathname === '/applications'){
                const visible = request ? <StudentsListElement { ...rest }/>: null;
                return (
                    <li className="list-element-block" key={ id }>
                        {visible}
                    </li>
                );
            };

            if (window.location.pathname === '/approved'){
                const visible = approved ? <StudentsListElementApproved { ...rest }/>: null;
                return (
                    <li className="list-element-block" key={ id }>
                        {visible}
                    </li>
                );
            };

            if (window.location.pathname === '/reject'){
                const visible = rejected ? <StudentsListElementRejected { ...rest }/>: null;
                return (
                    <li className="list-element-block" key={ id }>
                        {visible}
                    </li>
                );
            };

            if (window.location.pathname === '/practik'){
                const visible = onPractice ? <StudentsListElementOnPractice { ...rest }/>: null;
                return (
                    <li className="list-element-block" key={ id }>
                        {visible}
                    </li>
                );
            };

            if (window.location.pathname === '/achive'){
                const visible = inArchive ? <StudentsListElementArchive { ...rest }/>: null;
                return (
                    <li className="list-element-block" key={ id }>
                        {visible}
                    </li>
                );
            };
            
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
