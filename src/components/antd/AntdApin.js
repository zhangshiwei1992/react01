import React, { Component } from 'react';
import { Spin, Space, Alert, Switch } from 'antd';

class AntdApin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    toggle = (value) => {
        this.setState({ loading: value });
      };

    render() {
        return (
            <div>
                <Space size="middle">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                </Space>
                <br />
                <br />
                <br />

                <div>
                    <Spin spinning={this.state.loading}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <div style={{ marginTop: 16 }}>
                        Loading state：
                    <Switch checked={this.state.loading} onChange={this.toggle} />
                    </div>

                    <hr />
                    <hr />
                    <hr />
                    <Spin tip="Loading...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                </div>
            </div>
        );
    }
}

export default AntdApin;