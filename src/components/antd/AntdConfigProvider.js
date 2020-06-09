import React, { Component } from 'react';
import {
    ConfigProvider,
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Popconfirm,
    Table,
    Modal,
    Button,
    Select,
    Transfer,
    Radio,
} from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
    {
        title: '主键id',
        dataIndex: 'id',
        key: 'id',
        width: 100,
        fixed: 'left',
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: '编号',
        dataIndex: 'dictGroup',
        key: 'dictGroup',
        width: 300,
    },
    {
        title: 'code',
        dataIndex: 'code',
        key: 'code',
        width: 100,
        filters: [
            {
                text: '1',
                value: '1',
            },
            {
                text: '2',
                value: '2',
            },
        ],
        onFilter: (value, record) => record.code.indexOf(value) === 0,
    },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 200,
    },
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
        width: 500,
    },
];

const dataSource = [
    {
        key: 1,
        id: '张三',
        dictGroup: '1',
        code: '1',
        name: '1',
        description: '1',
    },
    {
        key: 2,
        id: '2',
        dictGroup: '2',
        code: '2',
        name: '2',
        description: '2',
    },
];

class Page extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    hideModal = () => {
        this.setState({ visible: false });
    };

    render() {
        const info = () => {
            Modal.info({
                title: 'some info',
                content: 'some info',
            });
        };
        const confirm = () => {
            Modal.confirm({
                title: 'some info',
                content: 'some info',
            });
        };
        return (
            <div className="locale-components">
                <div className="example">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
                <br />

                <div className="example">
                    <Pagination defaultCurrent={1} total={50} showSizeChanger />
                </div>
                <br />

                <div className="example">
                    <Select showSearch style={{ width: 200 }}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                    </Select>
                    <DatePicker />
                    <TimePicker />
                    <RangePicker style={{ width: 200 }} />
                </div>
                <br />

                <div className="example">
                    <Button type="primary" onClick={this.showModal}>
                        Show Modal
                    </Button>
                    <Button onClick={info}>Show info</Button>
                    <Button onClick={confirm}>Show confirm</Button>
                    <Popconfirm title="Question?">
                        <a href="#">Click to confirm</a>
                    </Popconfirm>
                </div>
                <br />

                <div className="example">
                    <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
                </div>
                <br />

                <div className="site-config-provider-calendar-wrapper">
                    <Calendar fullscreen={false} value={moment()} />
                </div>
                <br />



                <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
                    <p>Locale Modal</p>
                </Modal>
            </div>
        );
    }
}

class AntdConfigProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: enUS,
        };
    }

    changeLocale = (e) => {
        const localeValue = e.target.value;
        this.setState({ locale: localeValue });
        if (!localeValue) {
            moment.locale('en');
        } else {
            moment.locale('zh-cn');
        }
    };

    render() {
        const { locale } = this.state;
        return (
            <div style={{ padding: '10px' }}>
                <div className="change-locale">
                    <span style={{ marginRight: 16 }}>Change locale of components: </span>
                    <Radio.Group value={locale} onChange={this.changeLocale}>
                        <Radio.Button key="en" value={enUS}>
                            English
                    </Radio.Button>
                        <Radio.Button key="cn" value={zhCN}>
                            中文
                    </Radio.Button>
                    </Radio.Group>
                </div>

                <ConfigProvider locale={locale}>
                    <Page
                        key={locale ? locale.locale : 'en'}
                    />
                </ConfigProvider>
            </div>
        );
    }
}

export default AntdConfigProvider;