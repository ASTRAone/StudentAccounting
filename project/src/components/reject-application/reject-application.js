import React from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './reject-application.css';

const RejectApplication = ({ visibleRejectApplication, onHidetransferStudentCategoryReject, onNoPlaces, onNoSpecialty }) => {
    return (
        <Modal
            open={visibleRejectApplication}>
            <Modal.Content>
                <div className="accept-application-reject">
                    <div className="accept-application__i-reject">
                        <i 
                            class="fa fa-times"
                            onClick={onHidetransferStudentCategoryReject}>

                        </i>
                    </div>
                    <h3 className="accept-application__title-reject">
                        Отклонить заявку    
                    </h3>
                    <p className="accept-application__text-reject">
                        Выберите причину отклонения:
                    </p>
                    <Modal.Actions>
                        <div className="accept-application__btn-reject">
                            <button 
                                className="btn accept-application__no-places-reject"
                                onClick={onNoPlaces}>
                                    Нет мест
                            </button>
                            <button 
                                className="btn accept-application__specialty-reject"
                                onClick={onNoSpecialty}>
                                    Специальность
                            </button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default RejectApplication;