import React from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './changes-saved.css';

const ChangesSaved = ({ visibleChangesSaved, bringСhanges }) => {
    return (
        <Modal
            open={visibleChangesSaved}>
            <Modal.Content>
                <div className="accept-application">
                    <div className="accept-application__i">
                        <i className="fa fa-times" onClick={bringСhanges}></i>
                    </div>
                    <h3 className="accept-application__title">
                        Изменения сохранены
                    </h3>
                    <Modal.Actions>
                        <div className="accept-application__btn">
                            <button className="btn accept-application__forward" onClick={bringСhanges}>Ок</button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default ChangesSaved;