import React, { Component } from 'react';
import { Checkbox, Row, Col } from 'antd';

class AntdCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }

    render() {
        const plainOptions = ['Apple', 'Pear', 'Orange'];

        const options = [
            { label: 'Apple', value: '1' },
            { label: 'Pear', value: '2' },
            { label: 'Orange', value: '3' },
        ];

        const optionsWithDisabled = [
            { label: 'Apple', value: '4' },
            { label: 'Pear', value: '5' },
            { label: 'Orange', value: '6', disabled: false },
        ];

        return (
            <div style={{ "padding": "50px" }}>
                <h1>checkbox多选框</h1>

                <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} />
                <br />
                <br />

                <Checkbox.Group options={options} defaultValue={['Pear']} onChange={this.onChange} />
                <br />
                <br />

                <Checkbox.Group
                    options={optionsWithDisabled}
                    disabled
                    defaultValue={['Apple']}
                    onChange={this.onChange}
                />

                <br />
                <br />
                <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
                    <Row>
                        <Col span={8}>
                            <Checkbox value="A">A</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="B">B</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="C">C</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="D">D</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="E">E</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </div>
        );
    }
}

export default AntdCheckbox;