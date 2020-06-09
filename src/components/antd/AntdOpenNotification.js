import React, { Component } from 'react';
import { Button, notification, Space } from 'antd';

class AntdOpenNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    openNotificationWithIcon = type => {
        notification[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    openNotification2 = () => {
        const args = {
            message: 'Notification Title',
            description:
                'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
            duration: 0,
        };
        notification.open(args);
    };

    render() {
        return (
            <div>
                <Space style={{'padding':'10PX'}}>
                <Button type="primary" onClick={this.openNotification}>
                    Open the notification box
                </Button>
                <Button type="primary" onClick={this.openNotification2}>
                    Open the notification box
                </Button>

                <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
                <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
                <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
                <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>

            </Space>
            </div>
        );
    }
}

export default AntdOpenNotification;