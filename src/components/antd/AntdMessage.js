import React, { Component } from 'react';
import { message, Button, Space } from 'antd';

class AntdMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    info = () => {
        message.info('This is a normal message');
    };

    success = () => {
        message.success('This is a success message');
    };

    error = () => {
        message.error('This is an error message');
    };

    warning = () => {
        message.warning('This is a warning message');
    };

    loadingAndHide = () => {
        const hide = message.loading('Action in progress..', 0);
        // Dismiss manually and asynchronously
        setTimeout(hide, 2500);
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.info}>
                    Display normal message
                </Button>

                <Space>
                    <Button onClick={this.success}>Success</Button>
                    <Button onClick={this.error}>Error</Button>
                    <Button onClick={this.warning}>Warning</Button>
                </Space>

                <Button onClick={this.loadingAndHide}>Display a loading indicator</Button>
            </div>
        );
    }
}

export default AntdMessage;