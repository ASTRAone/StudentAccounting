import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getStudentsListRequest} from '../_actions/applications';
import Pagination from 'react-js-pagination';

import StudentsList from '../pages/students-list';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';
import '../pages/page-numbers/page-numbers.css';

class AchivePage extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            studentsListInArchive: this.props.studentsList || [],
            activePage: 1,
            visibleDelBtn: false,
            studentAddModal: false,
            studentCard: 'archive-card',

            searchElements: '',

            sortStatusDate: false,
            sortStatusName: false
        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest(4);
    }

    componentDidUpdate (prevProps, prevState) {
        
        const studentsListInArchiveNew = this.props.studentsList.filter((item) => item.inArchive) || [];
        const actPg = this.state.activePage;
        const studentsListInArchiveOnPage = studentsListInArchiveNew.slice(actPg * 10 -10, actPg * 10);

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListInArchive: studentsListInArchiveNew
            });
        }
    }

    visibleDelBtn = () => {
        this.setState((prevState) => ({ visibleDelBtn: !prevState.visibleDelBtn }));
    }

    onShowModalWindowAdd = () => {
        this.setState({
            studentAddModal: true
        });

        document.body.style.overflow = 'hidden';
    }

    onHideModalWindowAdd = () => {
        this.setState({
            studentAddModal: false
        });

        document.body.style.overflowY = 'scroll';
    }

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

    searchName(items, name) {

        if (name.length === 0){

            return items;
        }

        return items.firstName.toLowerCase().indexOf(name.toLowerCase()) > -1;

    }

    searchCollege(items, college) {

        if (college.length === 0){

            return items;
        }

        return items.label.toLowerCase().indexOf(college.toLowerCase()) > -1;
        
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

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
                        studentsList={this.state.studentsListInArchive.slice(this.state.activePage*10-10,this.state.activePage*10)}
                        buttons={[{null: ""}]}
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
                        totalItemsCount={this.state.studentsListInArchive.length}
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

export default connect(mapStateToProps, mapDispatchToProps())(AchivePage);