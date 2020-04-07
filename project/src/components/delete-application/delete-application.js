import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react'

import './delete-application.css';

export default class DeleteApplication extends Component {


    render() {



        return (
            <Modal 
                open={this.props.visibleModalDel}
                // onClose={this.handleClose}
            >

                <div className="accept-application">
                    <div className="accept-application__i">
                        <i className="fa fa-times"></i>
                    </div>
                    <h3 className="accept-application__title">
                        Удаление
                    </h3>
                    <p className="accept-application__text">
                        Вы действительно хотите удалить заявку?    
                    </p>
                    <div className="accept-application__btn">
                        <button className="btn accept-application__cancellation">Отмена</button>
                        <button className="btn accept-application__further">Да</button>
                    </div>
                </div>
            </Modal>


        )
    }
}