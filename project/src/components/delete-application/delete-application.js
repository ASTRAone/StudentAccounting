import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './delete-application.css';

export default class DeleteApplication extends Component {


    render() {

        const {modalDeleteWindow, onHideModalWindowDeleted, onConfirmDeleted} = this.props;

        return (
                <Modal 
                    open={modalDeleteWindow}
                    basic
                    size='small'>
                    <Modal.Content>
                        <div className="accept-application">
                            <div className="accept-application__i">
                                <i className="fa fa-times" onClick={onHideModalWindowDeleted}></i>
                            </div>
                            <h3 className="accept-application__title">
                                Удаление
                            </h3>
                            <p className="accept-application__text">
                                Вы действительно хотите удалить заявку?    
                            </p>
                            <Modal.Actions>
                                <div className="accept-application__btn">
                                    <button className="btn accept-application__cancellation" onClick={onHideModalWindowDeleted}>Отмена</button>
                                    <button className="btn accept-application__further_i" onClick={onConfirmDeleted}>Да</button>
                                </div>
                            </Modal.Actions>
                        </div>
                    </Modal.Content>
                </Modal>
        )
    }
}