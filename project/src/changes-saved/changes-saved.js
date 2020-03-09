import React from 'react';

import './changes-saved.css';

const ChangesSaved = () => {
    return (
        <div className="accept-application">
            <div className="accept-application__i">
                <i className="fa fa-times"></i>
            </div>
            <h3 className="accept-application__title">
                Изменения сохранены
            </h3>
            <div className="accept-application__btn">
                <button className="btn accept-application__forward">Ок</button>
            </div>
        </div>
    );
};

export default ChangesSaved;