import React, { Component } from 'react';

import RangePicker from "react-range-picker"

import './search.css';

import {connect} from 'react-redux';
import {postFindStudent} from '../../_actions/applications'

class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            colledge: '',
            initials: '',
            direction: '',
            startDate: null,
            endDate: null,
            ourDate: {}
        }
    }

    options = [
        { id: 1, label: "Backend" },
        { id: 2, label: "Frontend" },
        { id: 3, label: "Тестирование" },
        { id: 4, label: "Системный анализ" },
        { id: 5, label: "Системное администрирование" },
    ];

    // получение ВУЗА
    onChangeСolledge = (e) => {
        this.setState({
            colledge: e.target.value
        });
    };

    // Получение даты
    onChangeData = (startdate, enddate) => {
        this.setState({
            startDate: startdate,
            endDate: enddate
        });
    };

    // Получение ФИО
    onChangeInitials = (e) => {
        this.setState({
            initials: e.target.value
        });
    };

    // Получение направления практики
    onChangeDirection = (e) => {
        this.setState({
            direction: e.target.value
        });
    };

    // Сброс поиска
    cancelSearch = () => {
        this.setState({
            colledge: '',
            initials: '',
            direction: '',
            startDate: null,
            endDate: null,
            ourDate: {}
        });

        this.props.orderSearchStudents();
    };

    // Начать поиск
    onSearchStudents = () => {

        let initials = this.state.initials.split(" ");

        const searchParams = {
            status: this.props.statusStudent,
            Institution: this.state.colledge,
            PractiesBegining: this.state.startDate,
            PractiesEnding: this.state.endDate,
            FirstName: initials[0] ? initials[0].toString() : "",
            SecondName: initials[1] ? initials[1].toString() : "",
            Patronymic: initials[2] ? initials[2].toString() : "",
            Direction: this.state.direction
        }
        this.props.postFindStudent(searchParams, (value) => {
            // this.props.searchStudents(value);
        });

        // let params = this.props.postFindStudent(searchParams);
        // this.props.searchStudents(params)
    };

    render() {

        const options = this.options.map(({ id, label }) => {
            return (
                <option key={ id }>
                    { label }
                </option>
            );
        });

        let bnt_disabled = true;
        let reset = " opacity";

        if (!this.state.colledge && !this.state.initials && 
            !this.state.direction && !this.state.startDate &&
            !this.state.endDate) {
                bnt_disabled = true
            } else bnt_disabled = false;


        if (this.state.colledge.length || this.state.initials || 
            this.state.direction || this.state.startDate ||
            this.state.endDate) {
                reset = "";
            }

        return (
            <div className="search-menu">
                <input 
                    type="text" 
                    className="search-item" 
                    placeholder="Ключевое слово (ВУЗ)" 
                    value={this.state.colledge}
                    onChange={this.onChangeСolledge}/>

                <datalist id="direction">
                    { options }
                </datalist>   

                <RangePicker
                    placeholderText="Дата практики"
                    onDateSelected={this.onChangeData}
                    value={[this.state.startDate, this.state.endDate]}/>
                    
                <input 
                    type="text" 
                    className="search-item" 
                    placeholder="ФИО Иван Иванов" 
                    value={this.state.initials}
                    onChange={this.onChangeInitials}/>

                <input 
                    name="direction" 
                    list="direction" 
                    className="search-item"
                    placeholder="Направление"
                    value={this.state.direction}
                    onChange={this.onChangeDirection}/>

                <datalist id="direction">
                    { options }
                </datalist>   

                <button 
                    disabled={bnt_disabled}
                    className="btn btn-item"
                    onClick={this.onSearchStudents}>
                        Найти
                </button>
                <i 
                    className={`fa fa-undo${reset}`}
                    onClick={this.cancelSearch}>
                </i>
            </div>
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
        postFindStudent
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(Search);