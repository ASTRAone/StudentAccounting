import React from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './reject-application.css';

const RejectApplication = () => {
    return (
        <Modal>
            <Modal.Content>
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
                    <Modal.Actions>
                        <div className="accept-application__btn">
                            <button className="btn accept-application__no-places">Нет мест</button>
                            <button className="btn accept-application__specialty">Специальность</button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default RejectApplication;