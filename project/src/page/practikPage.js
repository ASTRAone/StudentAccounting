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
            studentsListOnPractice: this.props.studentsList || [],
            activePage: 1,
            visibleDelBtn: false,
            studentCard: 'practic-card',
            sortStatusDate: false,
            sortStatusName: false
        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest(3);
    }

    componentDidUpdate (prevProps, prevState) {
        const studentsListOnPracticeNew = this.props.studentsList || [];

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListOnPractice: studentsListOnPracticeNew
            });
        }
    }

    visibleDelBtn = () => {
        this.setState((prevState) => ({ visibleDelBtn: !prevState.visibleDelBtn }));
    };

    onShowModalWindowAdd = () => {
        this.setState({
            studentAddModal: true
        });

        document.body.style.overflow = 'hidden';
    };

    onHideModalWindowAdd = () => {
        this.setState({
            studentAddModal: false
        });

        document.body.style.overflowY = 'scroll';
    };

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    };

    // Сортировка по имени (доделать)
    onSortNameStudentList = () => {
        // API

        this.setState((prevState) => {
            return {
                sortStatusName: !prevState.sortStatusName
            }
        });
    };

    // Сортировка по дате (доделать)
    onSortDataStudentList = () => {
        // API

        this.setState((prevState) => {
            return {
                sortStatusDate: !prevState.sortStatusDate
            }
        });
    };

    // Добавить студента в категорию "архив"
    transferStudentCategoryArchive = (id) => {
        console.log("Студент переведен в Архив " + id)
    };

    render() {
        return (
            <React.Fragment>
                <div className="app-search">
                    <Search />
                </div>
                <div className="app-filter">
                    <Filter 
                        onSortNameStudentList={this.onSortNameStudentList}
                        onSortDataStudentList={this.onSortDataStudentList}
                        sortStatusDate={this.state.sortStatusDate}
                        sortStatusName={this.state.sortStatusName}/>
                    <Tools  
                        visibleDelBtn={this.visibleDelBtn} 
                        onShowModalWindowAdd={this.onShowModalWindowAdd}/>
                </div>
                <StudentsList 
                        studentsList={this.state.studentsListOnPractice.slice(this.state.activePage*10-10,this.state.activePage*10)}
                        buttons={[{icon: "fa-arrow-left", label: "В архив", change_category: this.transferStudentCategoryArchive}]}
                        visibleDelBtn={this.state.visibleDelBtn}
                        studentAddModal={this.state.studentAddModal}
                        onHideModalWindowAdd={this.onHideModalWindowAdd}
                        activePage={this.state.activePage}
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