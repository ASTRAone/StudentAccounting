import React from 'react';

import StudentsList from '../pages/students-list';
import PageNumbers from '../pages/page-numbers';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';
import {connect} from 'react-redux';

import {getStudentsListRequest} from '../_actions/applications';

class ApplicationsPage extends React.Component  {

    constructor(props) {
        super(props);

        this.state= {
            studentsListRequest: this.props.studentsList.filter((item) => item.request) || []
        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest();
    }
    
    componentDidUpdate(prevProps, prevState) {

        const studentListRequestNew = this.props.studentsList.filter((item) => item.request) || [];

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListRequest: studentListRequestNew
            });
        }
    }
    
    render() {  
        return (
            <React.Fragment>
                <div className="app-search">
                    <Search />
                </div>
                <div className="app-filter">
                    <Filter />
                    <Tools />
                </div>
                <StudentsList studentsList={this.state.studentsListRequest} 
                              buttons={[{icon: "fa-check-circle"}, {icon: "fa-ban"}]}/>
                <PageNumbers />
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

export default connect(mapStateToProps, mapDispatchToProps())(ApplicationsPage);