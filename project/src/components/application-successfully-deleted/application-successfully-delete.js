import React from 'react';

import './application-successfully-deleted.css';

const ApplicationSuccessfullyDeleted = () => {
    return (
        <div className="accept-application">
            <div className="accept-application__i">
                <i className="fa fa-times"></i>
            </div>
            <h3 className="accept-application__title">
                Заявка успешно удалена 
            </h3>
            <div className="accept-application__btn">
                <button className="btn accept-application__further">Ок</button>
            </div>
        </div>
    );
};

export default ApplicationSuccessfullyDeleted;