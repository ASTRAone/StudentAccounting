import React from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './application-successfully-accepted.css';

const ApplicationSuccessfullyAccepted = () => {
    return (
        <Modal>
            <Modal.Content>
                <div className="accept-application">
                    <div className="accept-application__i">
                        <i class="fa fa-times"></i>
                    </div>
                    <h3 className="accept-application__title">
                        Заявка успешно принята
                    </h3>
                    <p className="accept-application__text">
                        Студенту отправлено уведомление.
                    </p>
                    <Modal.Actions>
                        <div className="accept-application__btn">
                            <button className="btn accept-application__forward">Ок</button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default ApplicationSuccessfullyAccepted;