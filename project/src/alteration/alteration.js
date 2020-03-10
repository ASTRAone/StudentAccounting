import React from 'react';

import './alteration.css';

const Alteration = () => {
    return (
        <div className="accept-application">
            <div className="accept-application__i">
                <i className="fa fa-times"></i>
            </div>
            <h3 className="accept-application__title">
                Внесение изменений
            </h3>
            <p className="accept-application__text">
                Сохранить изменения?    
            </p>
            <div className="accept-application__btn">
                <button className="btn accept-application__cancellation">Отмена</button>
                <button className="btn accept-application__further">Да</button>
            </div>
        </div>
    );
};

export default Alteration;