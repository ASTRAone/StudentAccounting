import React, { Component } from 'react';

import './students-list.css';

import StudentsListElement from '../students-list-element';

const StudentsList = () => {
    
    return (
        <li className="list">
            <StudentsListElement/>
            <StudentsListElement/>
            <StudentsListElement/>
            <StudentsListElement/>
        </li>
    );
   


}

export default StudentsList;