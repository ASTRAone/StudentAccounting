import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getStudentsListRequest} from '../_actions/applications';

import Report from '../pages/report';

class ReportPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentsListReport: this.props.studentsList.filter((item) => item.onPractice) || []
        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest();
    }

    componentDidUpdate (prevProps, prevState) { 

        const studentsListReportNew = this.props.studentsList.filter((item) => item.onPractice) || [];

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListReport: studentsListReportNew
            });
        }
    }

    render() {
        return (
            <div>
                <Report studentsList={this.state.studentsListReport}/>
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

export default connect(mapStateToProps, mapDispatchToProps())(ReportPage);