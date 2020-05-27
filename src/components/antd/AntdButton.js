import React, { Component } from 'react';
// import { ConfigProvider, DatePicker, message, Button } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';
// moment.locale('zh-cn');

import { Button, Tooltip, Radio, Menu, Dropdown } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { PoweroffOutlined } from '@ant-design/icons';


class AntdButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            list: ['111111', 'aaaaaaa', 'bbbbbbbbbb'],
            loadings: [],
        };
    }

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    handleMenuClick = (e) => {
        console.log('click', e);
    }





    enterLoading = index => {
        const newLoadings = [...this.state.loadings];
        newLoadings[index] = true;
        this.setState({
            loadings: newLoadings,
        });
        setTimeout(() => {
            newLoadings[index] = false;
            this.setState({ loadings: newLoadings });
        }, 6000);
    };

    render() {
        const menuList = (
            <div>
                <Menu onClick={this.handleMenuClick}>
                    <Menu.Item key="1">1st item</Menu.Item>
                    <Menu.Item key="2">2nd item</Menu.Item>
                    <Menu.Item key="3">3rd item</Menu.Item>
                </Menu>
            </div>
        );

        console.log('antd组件测试render');
        const { size } = this.state;

        const { loadings } = this.state;

        return (
            <div className='antd_div'>
                <h1>antd组件测试</h1>
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>

                <br />

                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button type="primary" shape="circle">
                    A
                </Button>

                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>

                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>

                <br />

                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>

                <Tooltip title="search">
                    <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button type="dashed" icon={<SearchOutlined />}>Search</Button>

                <br />

                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br />
                <br />
                <Button type="primary" size={size}>
                    Primary
                </Button>
                <Button size={size}>Default</Button>
                <Button type="dashed" size={size}>
                    Dashed
                </Button>
                <br />
                <Button type="link" size={size}>
                    Link
                </Button>
                <br />
                <Button type="primary" icon={<DownloadOutlined />} size={size} />
                <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                    Download
                </Button>
                <Button type="primary" icon={<DownloadOutlined />} size={size}>
                    Download
                </Button>

                <div>
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>
                        Primary(disabled)
                    </Button>
                    <br />
                    <Button>Default</Button>
                    <Button disabled>Default(disabled)</Button>
                    <br />
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>
                        Dashed(disabled)
                    </Button>
                    <br />
                    <Button type="link">Link</Button>
                    <Button type="link" disabled>
                        Link(disabled)
                    </Button>
                    <br />
                    <Button type="link" danger>
                        Danger Link
                    </Button>
                    <Button type="link" danger disabled>
                        Danger Link(disabled)
                    </Button>
                    <br />
                    <Button danger>Danger Default</Button>
                    <Button danger disabled>
                        Danger Default(disabled)
    </Button>
                    <div className="site-button-ghost-wrapper">
                        <Button ghost>Ghost</Button>
                        <Button ghost disabled>
                            Ghost(disabled)
      </Button>
                    </div>
                </div>

                <hr />
                <hr />
                <hr />
                
                <div>
                    <Button type="primary">primary</Button>
                    <Button>secondary</Button>
                    <Dropdown overlay={menuList}>
                        <Button>
                            Actions <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>

                <hr />
                <hr />
                <hr />

                <Button type="primary" loading>
                    Loading
        </Button>
                <Button type="primary" size="small" loading>
                    Loading
        </Button>
                <Button type="primary" icon={<PoweroffOutlined />} loading />
                <br />
                <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                    Click me!
        </Button>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={loadings[1]}
                    onClick={() => this.enterLoading(1)}
                >
                    Click me!
        </Button>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={loadings[2]}
                    onClick={() => this.enterLoading(2)}
                />


            </div>
        );
    }
}

export default AntdButton;