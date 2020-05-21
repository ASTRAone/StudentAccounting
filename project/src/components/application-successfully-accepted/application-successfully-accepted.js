import React from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './application-successfully-accepted.css';

const ApplicationSuccessfullyAccepted = ({ visibleApplicationSuccessfullyAccepted, onHideApplicationSuccessfullyAccepted }) => {
    return (
        <Modal
            open={visibleApplicationSuccessfullyAccepted}>
            <Modal.Content>
                <div className="accept-application-successfull">
                    <div className="accept-application__i-successfull">
                        <i 
                            class="fa fa-times"
                            onClick={onHideApplicationSuccessfullyAccepted}>
                        </i>
                    </div>
                    <h3 className="accept-application__title-successfull">
                        Заявка успешно принята
                    </h3>
                    <p className="accept-application__text-successfull">
                        Студенту отправлено уведомление.
                    </p>
                    <Modal.Actions>
                        <div className="accept-application__btn-successfull">
                            <button 
                                className="btn accept-application__forward-successfull"
                                onClick={onHideApplicationSuccessfullyAccepted}>
                                    Ок
                            </button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default ApplicationSuccessfullyAccepted;