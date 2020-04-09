import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getStudentsListRequest} from '../_actions/applications';

import StudentsList from '../pages/students-list';
import PageNumbers from '../pages/page-numbers';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';
import Pagination from 'react-js-pagination';
import '../pages/page-numbers/page-numbers.css';

class PractikPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentsListOnPractice: this.props.studentsList.filter((item) => item.onPractice) || [],
            activePage: 1,
            visibleDelBtn: false,
            studentCard: 'practic-card'
        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest();
    }

    componentDidUpdate (prevProps, prevState) {

        const studentsListOnPracticeNew = this.props.studentsList.filter((item) => item.onPractice) || [];

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListOnPractice: studentsListOnPracticeNew
            });
        }
    }

    visibleDelBtn = () => {
        this.setState((prevState) => ({ visibleDelBtn: !prevState.visibleDelBtn }));
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        return (
            <React.Fragment>
                <div className="app-search">
                    <Search />
                </div>
                <div className="app-filter">
                        <Filter />
                        <Tools  visibleDelBtn={this.visibleDelBtn}/>
                    </div>
                <StudentsList 
                        studentsList={this.state.studentsListOnPractice.slice(this.state.activePage*10-10,this.state.activePage*10)}
                        buttons={[{icon: "fa-arrow-left", label: "В архив"}]}
                        visibleDelBtn={this.state.visibleDelBtn}
                        studentCard={this.state.studentCard}/>
                <Pagination
                    innerClass="pagination page-numbers"
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={this.state.studentsListOnPractice.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}/>
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

export default connect(mapStateToProps, mapDispatchToProps())(PractikPage);