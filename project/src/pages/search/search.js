import React, { Component } from 'react';

import RangePicker from "react-range-picker"

import './search.css';

export default class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            colledge: '',
            initials: '',
            direction: '',
            startDate: '',
            endDate: ''
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

    // Начать поиск
    onSearchStudents = () => {
        console.log(this.state);
    };

    render() {

        const options = this.options.map(({ id, label }) => {
            return (
                <option key={ id }>
                    { label }
                </option>
            );
        });

        let bnt_disabled = false;

        if (this.state.colledge.length === 0 && this.state.initials.length === 0 && 
            this.state.direction.length === 0 && this.state.startDate.length === 0 &&
            this.state.endDate.length === 0) {
                bnt_disabled = true
            } else bnt_disabled = false;

        return (
            <div className="search-menu">
                <input 
                    type="text" 
                    className="search-item" 
                    placeholder="Ключевое слово (ВУЗ)" 
                    value={this.state.colledge}
                    onChange={this.onChangeСolledge}/>

                <RangePicker
                    placeholderText="Дата практики"
                    onDateSelected={this.onChangeData}/>
                    
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
            </div>
        );
    };
};