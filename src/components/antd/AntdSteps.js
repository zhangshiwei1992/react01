import React, { Component } from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

class AntdSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>


            </div>
        );
    }
}

export default AntdSteps;