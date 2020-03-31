import React from 'react';

import StudentsList from '../pages/students-list';
import PageNumbers from '../pages/page-numbers';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';

export default class ApprovedPage extends React.Component{
    
    

    render(){
        return (
            <div>
                <div className="app-search">
                    <Search />
                </div>
                <div className="app-filter">
                        <Filter />
                        <Tools />
                    </div>
                    {/* Заменить  StudentsList*/}
                <StudentsList />
                <PageNumbers />
            </div>
            
        );
    }
    
};

