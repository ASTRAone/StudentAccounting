import React, { Component } from 'react';

import {connect} from 'react-redux';
import {getStudentsListRequest} from '../_actions/applications';

import StudentsList from '../pages/students-list';
import PageNumbers from '../pages/page-numbers';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';

class ApprovedPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            studentsListApproved: this.props.studentsList.filter((item) => item.approved) || [],

            visibleDelBtn: false
        }
    }    

    componentDidMount () {
        this.props.getStudentsListRequest();
    }

    componentDidUpdate (prevProps, prevState) {

        const studentsListApprovedNew = this.props.studentsList.filter((item) => item.approved) || [];

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListApproved: studentsListApprovedNew
            });
        }
    }

    visibleDelBtn = () => {
        this.setState((prevState) => ({ visibleDelBtn: !prevState.visibleDelBtn }));
    }

    render(){
        return (
            <React.Fragment>
                <div className="app-search">
                    <Search />
                </div>
                <div className="app-filter">
                        <Filter />
                        <Tools visibleDelBtn={this.visibleDelBtn}/>
                    </div>
                <StudentsList studentsList={this.state.studentsListApproved}
                              buttons={[{icon: "fa-arrow-left", label: "В архив"}, {icon: "fa-check-circle", label: "На практику"}]}
                              visibleDelBtn={this.state.visibleDelBtn}/>
                <PageNumbers  numbers={this.state.studentsListApproved}/>
            </React.Fragment>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps())(ApprovedPage);