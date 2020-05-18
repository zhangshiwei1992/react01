import React, { Component } from 'react';
import moment from 'moment';
import Config from '../../config/Config';
import axios from 'axios';
import { Table, Space, Button, Input, Divider, Select, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

class DictCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dictGroup: null,
            descriptionLike: null,
            nameLike: null,
            description: null,
            pageNum: 1,
            pageSize: 10,
            totalCount: 0,
            dictCodeList: [],
            selectedRowKeys: [],
            loading: false,
            orderStatus: null,
            orderStatusDictCodeList: [],
        };
    }

    // 字典表 - 订单状态
    findOrderStatusDictCodeList = () => {
        var url = Config.host + '/dictCode/findList';
        axios.post(url, {
            'dictGroup': 'order_status',
        })
            .then((response) => {
                console.log('字典表-订单状态: ', response.data.value);
                this.setState({
                    orderStatusDictCodeList: response.data.value,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // 字典表 - 条件分页查询
    findDictCodePage = (pageNum, pageSize) => {
        var url = Config.host + '/dictCode/findPage';
        axios.post(url, {
            "extraInfo": {
                'nameLike': this.state.nameLike,
                'descriptionLike': this.state.descriptionLike,
            },
            "pageNum": pageNum,
            "pageSize": pageSize,
            "param": {
                // dictGroup 若是 '' , 就向后端传入null,两种方法都行
                "dictGroup": !!this.state.dictGroup ? this.state.dictGroup : null
                // "dictGroup": this.state.dictGroup || null
            }
        })
            .then((response) => {
                console.log('字典表-条件分页查询: ', response.data.value);
                this.setState({
                    dictCodeList: response.data.value,
                    totalCount: response.data.totalCount
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.findDictCodePage(this.state.pageNun, this.state.pageSize);

        this.findOrderStatusDictCodeList();
    };

    // 页码点击触发
    pageChange = (e) => {
        console.log('jumpPage', e.current, e.pageSize);
        this.findDictCodePage(e.current, e.pageSize);
    }

    // 查看详情
    queryDetail = (id) => {
        // console.log('queryDetail: ', id);
    }

    // 查看选中的数据
    querySelected = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    // 点击选择框
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({
            selectedRowKeys: selectedRowKeys
        });
    };

    // 字典表分组代码输入框改动
    dictGroupInputChange = (e) => {
        this.setState({
            dictGroup: e.target.value
        });
    };

    // 名称输入框改动
    nameInputChange = (e) => {
        this.setState({
            nameLike: e.target.value
        });
    };

    // 描述输入框改动
    descriptionInputChange = (e) => {
        this.setState({
            descriptionLike: e.target.value
        });
    };

    // 查询
    queryPage = (e) => {
        this.findDictCodePage(this.state.pageNun, this.state.pageSize);
    };

    // 订单状态下拉框修改
    orderStatusOnchange = (e) => {
        console.log('订单状态下拉框修改: ', e)
    };

    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = (val) => {
        console.log('search:', val);
    }

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        // 标题行
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
                title: '名称和描述合并下',
                children: [
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
                ],
            },
            {
                title: '排序',
                dataIndex: 'sort',
                key: 'sort',
                width: 100,
            },
            {
                title: '创建人',
                dataIndex: 'creator',
                key: 'creator',
                width: 100,
            },
            {
                title: '创建时间',
                dataIndex: 'gmtCreated',
                key: 'gmtCreated',
                width: 200,
            },
            {
                title: '修改人',
                dataIndex: 'modifier',
                key: 'modifier',
                width: 100,
            },
            {
                title: '修改时间',
                dataIndex: 'gmtModified',
                key: 'gmtModified',
                width: 200,
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={this.queryDetail(record.id)}>查看</a> |
                        <a >修改</a> |
                        <a >删除</a>
                    </Space>
                ),
                fixed: 'right',
                width: 300,
            },
        ];

        // 字典表数据
        const dataSource = [];
        this.state.dictCodeList.map((value, index) => {
            dataSource.push({
                key: value.id,
                id: value.id,
                dictGroup: value.dictGroup,
                name: value.name,
                code: value.code,
                description: value.description,
                sort: value.sort,
                creator: value.creator,
                gmtCreated: value.gmtCreated ? moment(value.gmtCreated).format('YYYY-MM-DD HH:mm:ss') : '',
                modifier: value.modifier,
                gmtModified: value.gmtModified ? moment(value.gmtModified).format('YYYY-MM-DD HH:mm:ss') : "",
            })
        })

        // 翻页控制
        const pages = {
            size: 'middle',
            total: this.state.totalCount,
            showSizeChanger: true,
            showTotal: (total => `每页 ${10} 条, 共 ${total} 条`),
        };

        const orderStatusSelect = (
            this.state.orderStatusDictCodeList.map((orderStatusDictCode, key) => {
                return <Option value={orderStatusDictCode.code} key={orderStatusDictCode.id}>{orderStatusDictCode.name}</Option>
            })
        );

        return (
            <div style={{ 'padding': '10px' }}>
                <Row >
                    <Col span={6}> 
                            字典表分组代码: <Input style={{ 'width': '100px' }} placeholder={this.state.dictGroup} onChange={this.dictGroupInputChange} />
                    </Col>

                    <Col span={4}>
                        <div>
                            名称: <Input style={{ 'width': '100px' }} placeholder={this.state.nameLike} onChange={this.nameInputChange} />
                        </div>
                    </Col>

                    <Col span={8}>
                        <div>
                            描述: <Input style={{ 'width': '300px' }} placeholder={this.state.descriptionLike} onChange={this.descriptionInputChange} />
                        </div>
                    </Col>

                    <Col span={6} className='containerRow'>
                    订单状态:<Select
                                    // defaultValue={this.state.orderStatus}
                                    style={{ 'width': '200px' }}
                                    onChange={this.orderStatusOnchange}
                                    showSearch
                                    placeholder="请选择(可多选)"
                                    optionFilterProp="children"
                                    onFocus={this.onFocus}
                                    onBlur={this.onBlur}
                                    onSearch={this.onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    mode="multiple"
                                >
                                    {orderStatusSelect}
                                </Select>
                    </Col>
                </Row>
 
 

                <br />
                <Button type="primary" onClick={this.queryPage}>查询</Button>

                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.querySelected} disabled={!hasSelected} loading={loading}>
                        清空选中
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `已选择 ${selectedRowKeys.length} 条` : ''}
                    </span>
                </div>

                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={pages}
                    onChange={this.pageChange}
                    bordered
                    rowSelection={rowSelection}
                    scroll={{ x: 1300 }}
                    size="small"
                    yScroll='enable'
                />


            </div>
        );
    }
}

export default DictCode;