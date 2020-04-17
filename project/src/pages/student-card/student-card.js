import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Input  } from 'semantic-ui-react'

import NewCard from '../new-card';
import ApprovedCard from '../approved-card';
import RejectCard from '../reject-card';
import PracticCard from '../practic-card';
import ArchiveCard from '../archive-card';

export default class StudentCard extends Component {
    render(){

        const { studentCard, studentCardModal } = this.props;

        const updateCarDContent = () => {
            if (studentCard === 'new-card') {
                return <NewCard dataList={this.props}/>;
            }

            if (studentCard === 'approved-card') {
                return <ApprovedCard dataList={this.props}/>;
            }

            if (studentCard === 'reject-card') {
                return <RejectCard dataList={this.props}/>;
            }

            if (studentCard === 'practic-card') {
                return <PracticCard dataList={this.props}/>;
            }

            if (studentCard === 'archive-card') {
                return <ArchiveCard dataList={this.props}/>;
            }
        }
 
        return(
            <Modal 
                open={studentCardModal}
                basic
                size='small'>
                    <Modal.Content>
                        {updateCarDContent()}
                    </Modal.Content>
            </Modal>
        );
    };
};