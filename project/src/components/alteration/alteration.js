import React from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './alteration.css';

const Alteration = () => {
    return (
        <Modal>
            <Modal.Content>
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
                    <Modal.Actions>
                        <div className="accept-application__btn">
                            <button className="btn accept-application__cancellation">Отмена</button>
                            <button className="btn accept-application__further">Да</button>
                        </div>
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default Alteration;