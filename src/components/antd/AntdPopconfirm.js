import React, { Component } from 'react';
import { Popconfirm, message } from 'antd';

class AntdPopconfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
    }

    cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    }

    render() {
        return (
            <div>
                <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="确定"
                    cancelText="取消"
                >
                    <a href="#">Delete</a>
                </Popconfirm>
            </div>
        );
    }
}

export default AntdPopconfirm;