import React from 'react';

import './accept-application.css';
import { Modal } from 'semantic-ui-react';

const AcceptApplication = ({ visibleAcceptApplication, onHidetransferStudentCategoryApproved, onTransferStudentInCategoryApproved }) => {
    return (
        <Modal
            open={visibleAcceptApplication}>
            <Modal.Content>
                <div className="accept-application">
                    <div className="accept-application__i">
                        <i 
                            class="fa fa-times"
                            onClick={onHidetransferStudentCategoryApproved}>
                        </i>
                    </div>
                    <h3 className="accept-application__title">
                        Принять заявку
                    </h3>
                    <p className="accept-application__text">
                        Вы действительно хотите принять заявку?
                    </p>
                    <Modal.Actions>
                        <div className="accept-application__btn">
                            <button 
                                className="btn accept-application__close"
                                onClick={onHidetransferStudentCategoryApproved}>
                                    Отмена
                            </button>
                            <button 
                                className="btn accept-application__forward"
                                onClick={onTransferStudentInCategoryApproved}>
                                    Да
                            </button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default AcceptApplication;