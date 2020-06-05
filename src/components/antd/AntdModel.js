import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class AntdModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible1: false,

            visible2: false,
            ModalText: 'Content of the modal',
            confirmLoading: false,
        };
    }

    showModal1 = () => {
        this.setState({
            visible1: true,
        });
    };

    handleOk1 = e => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    };

    handleCancel1 = e => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    };

    handleCancel2 = e => {
        console.log(e);
        this.setState({
            visible2: false,
        });
    };

    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    };
    handleOk2 = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible2: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    render() {
        const { visible2, confirmLoading, ModalText } = this.state;


        return (
            <div>
                <Button type="primary" onClick={this.showModal1}>
                    Open Modal1
                </Button>
                <Modal
                    title="Basic Modal1"
                    visible={this.state.visible1}
                    onOk={this.handleOk1}
                    onCancel={this.handleCancel1}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

                <br />
                <br />

                <Button type="primary" onClick={this.showModal2}>
                    Open Modal2 with async logic
                </Button>
                <Modal
                    title="Title"
                    visible={visible2}
                    onOk={this.handleOk2}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel2}
                >
                <p>{ModalText}</p>
                </Modal>
            </div>
        );
    }
}

export default AntdModel;