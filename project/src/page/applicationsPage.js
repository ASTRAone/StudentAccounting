import React from 'react';

import StudentsList from '../pages/students-list';
import PageNumbers from '../pages/page-numbers';
import Search from '../pages/search';
import Filter from '../pages/filter';
import Tools from '../pages/tools';

const ApplicationsPage = () => {

    return (
        <div>
            <div className="app-search">
                <Search />
            </div>
            <div className="app-filter">
                    <Filter />
                    <Tools />
                </div>
            <StudentsList />
            <PageNumbers />
        </div>
        
    );
};

export default ApplicationsPage;