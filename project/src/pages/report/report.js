// Доработать все элементы и логику

import React, { Component } from 'react';

import './report.css';

export default class Report extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataList: this.props.studentsList,
            special: ''
        }
    }

    componentDidUpdate(prevProps) {

        const dataListNew = this.props.studentsList;

        if (prevProps.studentsList !== this.props.studentsList) {
            this.setState({
                dataList: dataListNew
            });
        }
    }

    // Получение выбранного учеюного заведения
    onSpecialInput = (e) => {
        this.setState({
            special: e.target.value
        });
    }

    items = [
        { id: 1, num: 1, stud: 'Иванов Иван Иванович', institut: 'КГУ', special: 'ИВТ', practice: 'backend', curator: 'Смирнов И.' },
        { id: 2, num: 2, stud: 'Петров Петр Аркадьевич', institut: 'КПК', special: 'Бизнес - информатика', practice: 'Системный анализ', curator: 'Андреев А.' },
        { id: 3, num: 3, stud: 'Смирнов Алексей Владимирович', institut: 'Костромской энергетический техникум им. Ф. В. Чижова', special: 'ИС', practice: 'Тестирование', curator: 'Яковлева Н.' },
        // { id: 4, num: 4, stud: 'Сидорова Анна Олеговна', institut: 'Костромской энергетический техникум им. Ф. В. Чижова', special: 'ИС', practice: '-', curator: '-' }
    ];

    specials = [
        {specialInc: 'ИВТ'}, 
        {specialInc: 'Бизнес - информатика'},
        {specialInger: 'ИС'},
        {specialColl: 'Программирование в компьютерных системах'}
    ];

    curators = [
        {curator: 'Андреев А.'},
        {curator: 'Смирнов И.'},
        {curator: 'Яковлева Н.'}
    ];

    render() {  

        // Получение всех учебных заведений
        const instituts = this.items.map((item, index) => {
            return (
                <option key={index}>{item.institut}</option>
            );
        });

        // Получение всех студентов-практикантов
        const students = this.state.dataList.map((item, index) => {
            return (
                <option key={index}>{item.SecondName + " " + item.FirstName + " " + item.Patronymic}</option>
            );
        });

        // Получение всех специальностей в соответвие с выбранным учебным заведением
        const specials = this.specials.map((item, index) => {

            if (this.state.special === 'КГУ') {
                return (
                    <option key={index}>{item.specialInc}</option>   
                );
            }

            if (this.state.special === 'КПК') {
                return (
                    <option key={index}>{item.specialColl}</option>   
                );
            }

            if (this.state.special === 'Костромской энергетический техникум им. Ф. В. Чижова') {
                return (
                    <option key={index}>{item.specialInger}</option>   
                );
            }
        });

        // Получение всех направлений
        const practics = this.items.map((item, index) => {
            return (
                <option key={index}>{item.practice}</option>
            );
        });

        // Получение всех кураторов
        const curators = this.curators.map((item, index) => {
            return (
                <option key={index}>{item.curator}</option>
            );
        });

        const items = this.state.dataList.map((item, index) => {

            return (
                    <div key={ index } className="compose-report__item">
                        <div className="compose-report__offer compose-report_num">
                            { index + 1 }
                        </div>  
                        <div className="compose-report__offer compose-report_stud">
                            { item.SecondName + " " + item.FirstName + " " + item.Patronymic }
                        </div> 
                        <div className="compose-report__offer compose-report_institut">
                            { item.College }
                        </div> 
                        <div className="compose-report__offer compose-report_special">
                            { item.Faculty }
                        </div> 
                        <div className="compose-report__offer compose-report_practice">
                            { item.Speciality }
                        </div> 
                        <div className="compose-report__offer compose-report_curator">
                            { item.Curator }
                        </div> 
                    </div>                 
            );
        });

        return (
            <div className="container-report">
                <h3 className="container-report__title">Фильтры</h3>
                <div className="container-our">
                    <div className="report-our">
                        <div className="report-student">
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label">Студент:</label>
                                <input id="item-1" type="text" className="report-student__input" list="students"/>
                                <datalist id="students">
                                    {students}
                                </datalist>   
                            </div>
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label">Учебное заведение:</label>
                                <input id="item-1" type="text" className="report-student__input" list="institution" onChange={this.onSpecialInput} value={this.state.special}/>
                                <datalist id="institution">
                                    {instituts}
                                </datalist>   
                            </div>
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label">Специальность:</label>
                                <input id="item-1" type="text" className="report-student__input" list="specialty"/>
                                <datalist id="specialty">
                                    {specials}
                                </datalist>   
                            </div>
                        </div>
                        <div className="report-company">
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label">Направление практики:</label>
                                <input id="item-1" type="text" className="report-student__input" list="practice"/>
                                <datalist id="practice">
                                    {practics}
                                </datalist>   
                            </div>
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label report-student__label_company">Куратор:</label>
                                <input id="item-1" type="text" className="report-student__input" list="curator"/>
                                <datalist id="curator">
                                    {curators}
                                </datalist>   
                            </div>
                        </div>
                    </div>
                    <div className="container-date">
                        <p className="container-date__text">Период: с</p>
                        <div className="container-date__input-our">
                            <i className="fa fa-calendar"></i>
                            <input type="text" className="container-date__input datepicker-here" data-position="right top"/>
                        </div>
                        <p className="container-date__text container-date__text_bottom">по</p>
                        <div className="container-date__input-our">
                            <i className="fa fa-calendar"></i>
                            <input type="text" className="container-date__input container-date__input_bottom datepicker-here" data-position="right top"/>
                        </div>
                        <button className="btn container-date__btn container-date__form">Сформировать</button>
                        <button className="btn container-date__btn container-date__export">Экспорт в Excel</button>
                    </div>
                </div>
                <div className="compose-report">
                    <div className="compose-report__item">
                        <div className="compose-report__offer compose-report_num">
                            №
                        </div>  
                        <div className="compose-report__offer compose-report_stud">
                            Студент
                        </div> 
                        <div className="compose-report__offer compose-report_institut">
                            Учебное заведение
                        </div> 
                        <div className="compose-report__offer compose-report_special">
                            Специальность
                        </div> 
                        <div className="compose-report__offer compose-report_practice">
                            Направление практики
                        </div> 
                        <div className="compose-report__offer compose-report_curator">
                            Куратор
                        </div> 
                    </div>
                    { items }
                </div>
            </div>
        );
    };
};
