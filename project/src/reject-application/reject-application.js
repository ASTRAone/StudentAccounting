import React from 'react';

import './reject-application.css';

const RejectApplication = () => {
    return (
        <div className="accept-application">
            <div className="accept-application__i">
                <i class="fa fa-times"></i>
            </div>
            <h3 className="accept-application__title">
                Отклонить заявку    
            </h3>
            <p className="accept-application__text">
                Выберите причину отклонения:
            </p>
            <div className="accept-application__btn">
                <button className="btn accept-application__no-places">Нет мест</button>
                <button className="btn accept-application__specialty">Специальность</button>
            </div>
        </div>
    );
};

export default RejectApplication;