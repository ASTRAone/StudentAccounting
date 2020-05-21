import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react';

import noavatarcurator from '../img/noavatar-curator.jpg';

import './curator-card.css';

export default class CuratorCard extends Component {
    render() {

        const { visibleCuratorCard, onHideCuratorCard, curatorData } = this.props;

        return (
            <Modal 
                open={visibleCuratorCard}
                centered>
                <Modal.Content
                    className="curator">        
                    <div className="card-curator-container">
                        <i 
                            className="fa fa-sign-out"
                            onClick={onHideCuratorCard}>
                        </i>
                        <div className="ui card">
                            <div className="image">
                                <img alt="Фотография наставника" src={noavatarcurator} />
                            </div>
                            <div className="content">
                                <div className="header">{curatorData}</div>
                                {/* <div class="meta"><span class="date">Joined in 2015</span></div>
                                <div class="description">Matthew is a musician living in Nashville.</div> */}
                            </div>
                        </div>
                    </div>
                </Modal.Content>
            </Modal>
        );
    };
};