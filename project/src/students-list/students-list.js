import React, { Component } from 'react';

import './students-list.css';

import StudentsListElement from '../students-list-element';

const StudentsList = () => {
    
    return (
        <ul className="list">
            <StudentsListElement/>
            <StudentsListElement/>
            <StudentsListElement/>
            <StudentsListElement/>
        </ul>
    );
};

export default StudentsList;