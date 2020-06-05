import React, { Component } from 'react';
import { Alert } from 'antd';

class AntdAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{"padding":"10px"}}>
                <Alert message="Success Text" type="success" />
                <br />
                <Alert message="Info Text" type="info" />
                <br />
                <Alert message="Warning Text" type="warning" />
                <br />
                <Alert message="Error Text" type="error" />
                <br />

                <Alert
                    message="Success Tips"
                    description="Detailed description and advice about successful copywriting."
                    type="success"
                    showIcon
                />
                <br />
                <Alert
                    message="Informational Notes"
                    description="Additional description and information about copywriting."
                    type="info"
                    showIcon
                />
                <br />
                <Alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                    closable
                />
                <br />
                <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                />
            </div>
        );
    }
}

export default AntdAlert;