import React, { Component } from 'react';
import { Cascader } from 'antd';

class AntdCascader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChange = (value) => {
        console.log(value);
    }
    render() {
        const options = [
            {
                value: '1',
                label: 'Zhejiang',
                children: [
                    {
                        value: '2',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: '3',
                                label: 'West Lake',
                            },
                        ],
                    },
                ],
            },
            {
                value: '4',
                label: 'Jiangsu',
                children: [
                    {
                        value: '5',
                        label: 'Nanjing',
                        children: [
                            {
                                value: '6',
                                label: 'Zhong Hua Men',
                            },
                        ],
                    },
                ],
            },
        ];

        const options2 = [
            {
              value: '7',
              label: 'Zhejiang',
              children: [
                {
                  value: '8',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: '9',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: '11',
              label: 'Jiangsu',
              children: [
                {
                  value: '22',
                  label: 'Nanjing',
                  children: [
                    {
                      value: '33',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ];

        return (
            <div>
                <h1>AntdCascader级联</h1>
                <Cascader options={options} onChange={this.onChange} placeholder="Please select" />
                <br />
                <br />

                <Cascader
                    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                    options={options2}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default AntdCascader;