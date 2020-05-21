import React from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './rejected.css';

const Rejected = ({ visibleReject, onHideReject }) => {
    return (
        <Modal
            open={visibleReject}>
            <Modal.Content>
                <div className="accept-application-rejected">
                    <div className="accept-application__i-rejected">
                        <i 
                            class="fa fa-times"
                            onClick={onHideReject}>
                        </i>
                    </div>
                    <h3 className="accept-application__title-rejected">
                        Заявка отклонена
                    </h3>
                    <p className="accept-application__text-rejected">
                        Студенту отправлено уведомление
                    </p>
                    <Modal.Actions>
                        <div className="accept-application__btn-rejected">
                            <button 
                                className="btn accept-application__further-rejected"
                                onClick={onHideReject}>
                                    Ок
                            </button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default Rejected;