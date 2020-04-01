import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getStudentsListRequest} from '../_actions/applications';

import StudentsList from '../pages/students-list';
import PageNumbers from '../pages/page-numbers';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';

class RejectPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentsListRejected: this.props.studentsList.filter((item) => item.rejected) || []
        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest();
    }

    componentDidUpdate (prevProps, prevState) {
        const studentsListRejectedNew = this.props.studentsList.filter((item) => item.rejected) || [];

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListRejected: studentsListRejectedNew
            });
        }
    }

    render () {
        return (
            <div>
                <div className="app-search">
                    <Search />
                </div>
                <div className="app-filter">
                        <Filter />
                        <Tools />
                    </div>
                <StudentsList studentsList={this.state.studentsListRejected}
                              buttons={[{icon: "fa-check-circle"}]}/>
                <PageNumbers />
            </div>
            
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

export default connect(mapStateToProps, mapDispatchToProps())(RejectPage);