import React from 'react';

import StudentsList from '../pages/students-list';
import PageNumbers from '../pages/page-numbers';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';
import {connect} from 'react-redux';

import {getStudentsListRequest} from '../_actions/applications';
import Pagination from 'react-js-pagination';
import '../pages/page-numbers/page-numbers.css';

class ApplicationsPage extends React.Component  {

    constructor(props) {
        super(props);

        this.state= {
            studentsListRequest: this.props.studentsList.filter((item) => item.request) || [],
            activePage: 1,
            visibleDelBtn: false,
            studentCard: 'new-card'
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
                    <Tools 
                        visibleDelBtn={this.visibleDelBtn} 
                        onShowModalWindowAdd={this.onShowModalWindowAdd}/>
                </div>
                <StudentsList 
                        studentsList={this.state.studentsListRequest.slice(this.state.activePage*10-10,this.state.activePage*10)} 
                        buttons={[{icon: "fa-check-circle", label: 'Принять'}, {icon: "fa-ban", label: 'Отклонить'}]}
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
                        totalItemsCount={this.state.studentsListRequest.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}/>
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