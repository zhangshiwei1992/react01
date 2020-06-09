import React, { Component } from 'react';
import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';


class AntdProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 10,
        };
    }

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    };

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    };

    render() {
        return (
            <div style={{ 'padding': '10px', 'width': '600px' }}>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
                <br />
                <br />
                <Progress type="circle" percent={75} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />

                <br />
                <br />

                <Progress type="circle" percent={this.state.percent} />
                <Button.Group>
                    <Button onClick={this.decline} icon={<MinusOutlined />} />
                    <Button onClick={this.increase} icon={<PlusOutlined />} />
                </Button.Group>

                <br />
                <br />

                <Progress percent={this.state.percent} />
                <Button.Group>
                    <Button onClick={this.decline} icon={<MinusOutlined />} />
                    <Button onClick={this.increase} icon={<PlusOutlined />} />
                </Button.Group>
            </div>
        );
    }
}

export default AntdProgress;