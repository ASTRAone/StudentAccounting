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
            studentsListInArchive: this.props.studentsList.filter((item) => item.inArchive) || [],
            visibleDelBtn: false
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

    visibleDelBtn = () => {
        this.setState((prevState) => ({ visibleDelBtn: !prevState.visibleDelBtn }));
    }
     
    render() {
        return (
            <React.Fragment>
                <div className="app-search">
                    <Search />
                </div>
                <div className="app-filter">
                        <Filter />
                        <Tools visibleDelBtn={this.visibleDelBtn}/>
                    </div>
                <StudentsList studentsList={this.state.studentsListInArchive}
                              buttons={[{null: ""}]}
                              visibleDelBtn={this.state.visibleDelBtn}/>
                <PageNumbers  numbers={this.state.studentsListInArchive}/>
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

export default connect(mapStateToProps, mapDispatchToProps())(AchivePage);