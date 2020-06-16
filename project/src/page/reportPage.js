import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getStudentsListRequest} from '../_actions/applications';

import Report from '../pages/report';

class ReportPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentsListReport: this.props.studentsList || []
        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest(3);
    }

    componentDidUpdate (prevProps, prevState) { 
        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListReport: this.props.studentsList
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                <Report studentsList={this.state.studentsListReport}/>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps())(ReportPage);