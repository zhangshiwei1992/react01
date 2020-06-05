import React, { Component } from 'react';
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

class AntdTabsTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };

    render() {
        return (
            <div>
                <Radio.Group onChange={this.handleModeChange} value={this.state.mode} style={{ marginBottom: 8 }}>
                    <Radio.Button value="top">Horizontal</Radio.Button>
                    <Radio.Button value="left">Vertical</Radio.Button>
                </Radio.Group>
                <Tabs defaultActiveKey="1" tabPosition={this.state.mode} >
                    {[...Array(6).keys()].map(i => (
                        <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                            Content of tab {i}
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        );
    }
}

export default AntdTabsTwo;


