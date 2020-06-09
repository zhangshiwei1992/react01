import React, {Component} from 'react';
import {Button, Drawer, Radio, Space} from 'antd';

class AntdDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            placement: 'left'
        };
    }


    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        const {placement, visible} = this.state;

        return (
            <div>
                <Space>
                    <Radio.Group defaultValue={placement} onChange={this.onChange}>
                        <Radio value="top">top</Radio>
                        <Radio value="right">right</Radio>
                        <Radio value="bottom">bottom</Radio>
                        <Radio value="left">left</Radio>
                    </Radio.Group>
                    <Button type="primary" onClick={this.showDrawer}>
                        Open
                    </Button>
                </Space>
                <Drawer
                    title="Basic Drawer"
                    placement={placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    key={placement}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}

export default AntdDrawer;
