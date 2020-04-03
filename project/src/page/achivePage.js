import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getStudentsListRequest} from '../_actions/applications';

import StudentsList from '../pages/students-list';
import PageNumbers from '../pages/page-numbers';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';

class AchivePage extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            studentsListInArchive: this.props.studentsList.filter((item) => item.inArchive) || []
        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest();
    }

    componentDidUpdate (prevProps, prevState) {
        
        const studentsListInArchiveNew = this.props.studentsList.filter((item) => item.inArchive) || [];

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListInArchive: studentsListInArchiveNew
            });
        }
    }

    render() {
        return (
            <div>
                <div className="app-search">
                    <Search />
                </div>
                <div className="app-filter">
                        <Filter />
                        <Tools />
                    </div>
                <StudentsList studentsList={this.state.studentsListInArchive}
                              buttons={[{null: ""}]}/>
                <PageNumbers  numbers={this.state.studentsListInArchive}/>
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

export default connect(mapStateToProps, mapDispatchToProps())(AchivePage);