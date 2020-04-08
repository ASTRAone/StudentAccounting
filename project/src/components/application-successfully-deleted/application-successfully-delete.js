import React from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './application-successfully-deleted.css';

const ApplicationSuccessfullyDeleted = ({modalDeleted, onHideModalDeleted}) => {
    return (
        <Modal 
            open={modalDeleted}
            basic
            size='small'>
            <Modal.Content>
                <div className="accept-application">
                    <div className="accept-application__i">
                        <i className="fa fa-times"></i>
                    </div>
                    <h3 className="accept-application__title">
                        Заявка успешно удалена 
                    </h3>
                    <Modal.Actions>
                        <div className="accept-application__btn">
                            <button className="btn accept-application__further" onClick={onHideModalDeleted}>Ок</button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default ApplicationSuccessfullyDeleted;