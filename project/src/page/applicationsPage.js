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

import AcceptApplication from '../components/accept-application';
import ApplicationSuccessfullyAccepted from '../components/application-successfully-accepted';
import RejectApplication from '../components/reject-application';
import Rejected from '../components/rejected';

class ApplicationsPage extends React.Component  {

    constructor(props) {
        super(props);

        this.state= {
            studentsListRequest: this.props.studentsList || [],
            activePage: 1,
            visibleDelBtn: false,
            studentCard: 'new-card',
            visibleAcceptApplication: false,
            visibleApplicationSuccessfullyAccepted: false,
            visibleRejectApplication: false, 
            visibleReject: false,
            idStudentCard: '',

            sortStatusDate: false,
            sortStatusName: false

        }
    }

    componentDidMount () {
        this.props.getStudentsListRequest(0);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                studentsListRequest: this.props.studentsList
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

    // Открыть окно для перевода в категорию "Одобренные заявки"
    transferStudentCategoryApproved = (id) => {
        this.setState({
            idStudentCard: id,
            visibleAcceptApplication: true
        });
        console.log("Студент переведен в категорию Одобренные " + id)
    };

    // Закрыть окно для перевода в категорию "Одобренные заявки"
    onHidetransferStudentCategoryApproved = () => {
        this.setState({
            visibleAcceptApplication: false
        });
    };

    // Перевести студента в категорию "Одобренные заявки"
    onTransferStudentInCategoryApproved = () => {
        console.log(this.state.idStudentCard);

        this.setState({
            visibleAcceptApplication: false,
            visibleApplicationSuccessfullyAccepted: true
        });
    };

    // Закрыть окно подтверждения перевода студента в категорию "Одобренные заявки"
    onHideApplicationSuccessfullyAccepted = () => {
        this.setState({
            visibleApplicationSuccessfullyAccepted: false
        });
    };

    // Открыть окно для перевода в категорию "Отклоненные заявки"
    transferStudentCategoryReject = (id) => {
        console.log("Студент переведен в категорию Отклоненные" + id)

        this.setState({
            visibleRejectApplication: true,
            idStudentCard: id
        });
    };

    // Закрыть окно для перевода в категорию "Отклоненные заявки"
    onHidetransferStudentCategoryReject = (id) => {
        this.setState({
            visibleRejectApplication: false
        });
    };

    // Отказ по причине "Нет мест"
    onNoPlaces = () => {
        console.log(this.state.idStudentCard);

        this.setState({
            visibleRejectApplication: false,
            visibleReject: true
        });
    };

    // Отказ по причине "специальности"
    onNoSpecialty = () => {
        console.log(this.state.idStudentCard);

        this.setState({
            visibleRejectApplication: false,
            visibleReject: true
        });
    };

    // Закрыть окно подтверждения отклонения заявки
    onHideReject = () => {
        this.setState({
            visibleReject: false
        });
    };

    // Очистка поиска
    orderSearchStudents = () => {
        // this.setState(({studentsListInArchive}) => {
        //     return {
        //         studentsListInArchive: this.props.studentsList || []
        //     };
        // });
        this.props.getStudentsListRequest(0);
    };
    
    render() {  
        return (
            <React.Fragment>
                <div className="app-search">
                    <Search 
                        orderSearchStudents={this.orderSearchStudents}
                        statusStudent={0}/>
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
                        studentsList={this.state.studentsListRequest.slice(this.state.activePage*10-10,this.state.activePage*10)} 
                        buttons={[{icon: "fa-check-circle", label: 'Принять', change_category: this.transferStudentCategoryApproved}, {icon: "fa-ban", label: 'Отклонить', change_category: this.transferStudentCategoryReject}]}
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
                <AcceptApplication 
                    visibleAcceptApplication={this.state.visibleAcceptApplication}
                    onHidetransferStudentCategoryApproved={this.onHidetransferStudentCategoryApproved}
                    onTransferStudentInCategoryApproved={this.onTransferStudentInCategoryApproved}/>
                <ApplicationSuccessfullyAccepted 
                    visibleApplicationSuccessfullyAccepted={this.state.visibleApplicationSuccessfullyAccepted}
                    onHideApplicationSuccessfullyAccepted={this.onHideApplicationSuccessfullyAccepted}/>
                <RejectApplication 
                    visibleRejectApplication={this.state.visibleRejectApplication}
                    onHidetransferStudentCategoryReject={this.onHidetransferStudentCategoryReject}
                    onNoPlaces={this.onNoPlaces}
                    onNoSpecialty={this.onNoSpecialty}/>
                <Rejected 
                    visibleReject={this.state.visibleReject}
                    onHideReject={this.onHideReject}/>
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