import React from 'react';

import './accept-application.css';

const AcceptApplication = () => {
    return (
        <div className="accept-application">
            <div className="accept-application__i">
                <i class="fa fa-times"></i>
            </div>
            <h3 className="accept-application__title">
                Принять заявку
            </h3>
            <p className="accept-application__text">
                Вы действительно хотите принять заявку?
            </p>
            <div className="accept-application__btn">
                <button className="btn accept-application__close">Отмена</button>
                <button className="btn accept-application__forward">Да</button>
            </div>
        </div>
    );
};

export default AcceptApplication;