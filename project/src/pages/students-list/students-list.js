import React, { Component } from 'react';

import './students-list.css';

import StudentsListElement from '../students-list-element';

export default class StudentsList extends Component {

    componentDidMount () {
        // обращение к серверу
        
        // данные которые пришли необходимо записать в стейт
    }

    item = [
        { id: 1, date: '11.02.2019', SecondName: 'Иванов', FirstName: 'Иван', Patronymic: 'Иванович', College: 'КГУ', Faculty: 'ИАСТ', Speciality: 'Разработчик',  PractiesBegining: '12.04.2019', PractiesEnding: '12.09.2019', Phone: '8 (999) 245-45-65', Email: 'ivanov@mail.com' },
        { id: 2, date: '11.02.2019', SecondName: 'Чижов', FirstName: 'Владимир', Patronymic: 'Иванович', College: 'Политех', Faculty: 'Программирование', Speciality: 'Тестировщик', PractiesBegining: '12.04.2019', PractiesEnding: '12.09.2019', Phone: '8 (999) 245-45-65', Email: 'ivanov@mail.com' },
        { id: 3, date: '11.02.2019', SecondName: 'Скворцов', FirstName: 'Николай', Patronymic: 'Иванович', College: 'КГУ', Faculty: 'ФАСТ', Speciality: 'Разработчик', PractiesBegining: '12.04.2019', PractiesEnding: '12.09.2019', Phone: '8 (999) 245-45-65', Email: 'ivanov@mail.com' },
        { id: 4, date: '11.02.2019', SecondName: 'Сидоров', FirstName: 'Иван', Patronymic: 'Иванович', College: 'КГУ', Faculty: 'ИАСТ', Speciality: 'Разработчик', PractiesBegining: '12.04.2019', PractiesEnding: '12.09.2019', Phone: '8 (999) 245-45-65', Email: 'ivanov@mail.com' }
    ];

    render() {

        const items = this.item.map((item)=> {

            const { id } = item;
            const { ...rest } = item;

            return (      
                <li className="list-element-block" key={ id }>
                    {/* Этот элемент должен быть не зависимым */}
                    <StudentsListElement { ...rest }/>
                </li>
            );
        });

        return (
            <ul className="list">
                { items }

            </ul>
        );
    };
};