import React, { Component } from 'react';

import './report.css';

export default class Report extends Component {
    render() {
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
                                    <option>студент 1</option>
                                    <option>студент 2</option>
                                </datalist>   
                            </div>
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label">Учебное заведение:</label>
                                <input id="item-1" type="text" className="report-student__input" list="institution"/>
                                <datalist id="institution">
                                    <option>КПК</option>
                                    <option>Чижова</option>
                                </datalist>   
                            </div>
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label">Специальность:</label>
                                <input id="item-1" type="text" className="report-student__input" list="specialty"/>
                                <datalist id="specialty">
                                    <option>программист</option>
                                    <option>дизайнер</option>
                                </datalist>   
                            </div>
                        </div>

                        <div className="report-company">
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label">Направление практики:</label>
                                <input id="item-1" type="text" className="report-student__input" list="specialty"/>
                                <datalist id="specialty">
                                    <option>разработчик</option>
                                    <option>тестеровщик</option>
                                </datalist>   
                            </div>
                            <div className="report-student__item">
                                <label htmlFor="item-1" className="report-student__label report-student__label_company">Куратор:</label>
                                <input id="item-1" type="text" className="report-student__input" list="specialty"/>
                                <datalist id="specialty">
                                    <option>Иванов И.Ф.</option>
                                    <option>Беляев А.А.</option>
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

                

            </div>
        );
    };
};