import React, {Component} from 'react';
import {Button, message, Popconfirm} from 'antd';

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
            <div style={{padding: '10px'}}>
                <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="确定"
                    cancelText="取消"
                >
                    <Button type="link">删除</Button>
                </Popconfirm>
            </div>
        );
    }
}

export default AntdPopconfirm;
