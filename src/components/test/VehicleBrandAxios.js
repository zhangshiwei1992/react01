import React, {Component} from 'react';
import {Button, Col, Input, Row, Select, Space, Table} from "antd";
import moment from 'moment';
import Config from '../../config/Config';
import axios from 'axios';
import 'moment/locale/zh-cn';

const {Option} = Select;

class VehicleBrandAxios extends Component {
    constructor(props) {
        console.log('01---------constructor------构造方法');
        super(props);
        this.state = {
            initial: null,
            status: null,
            nameLike: null,
            pageNum: 1,
            pageSize: 10,
            totalCount: 0,
            vehicleBrandList: [],
            statusDictCodeList: [],
        };
    }

    componentDidMount() {
        this.findVehicleBrandPage(this.state.pageNum, this.state.pageSize);
        this.findStatusDictCodeList();
    };

    // 首字母输入更新
    initialChange = (e) => {
        this.setState({
            initial: e.target.value,
        })
    }

    // 名称输入更新
    nameChange = (e) => {
        this.setState({
            nameLike: e.target.value,
        })
    }

    // 状态下拉框修改
    statusOnchange = (e) => {
        console.log('状态下拉框修改: ', e)
    };

    // 车辆品牌 - 条件分页查询
    findVehicleBrandPage = (pageNum, pageSize) => {
        var url = Config.host + '/vehicleBrand/findPage';
        axios.post(url, {
            "extraInfo": {
                'nameLike': this.state.nameLike
            },
            "pageNum": pageNum,
            "pageSize": pageSize,
            "param": {
                "initial": this.state.initial || null,
                "status": this.state.status || null,
            }
        })
            .then((response) => {
                console.log('response.data.value :', response.data.value);
                this.setState({
                    vehicleBrandList: response.data.value,
                    totalCount: response.data.totalCount
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // 回车键触发
    onKeyUpFunction = (event) => {
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            this.findVehicleBrandPage(this.state.pageNum, this.state.pageSize);
        }
    }

    // 查询
    queryPage = (e) => {
        this.findVehicleBrandPage(this.state.pageNum, this.state.pageSize);
    };

    // 字典表 - 状态
    findStatusDictCodeList = () => {
        var url = Config.host + '/dictCode/findList';
        axios.post(url, {
            'dictGroup': 'PACKAGE_STATUS',
        })
            .then((response) => {
                console.log('字典表-状态: ', response.data.value);
                this.setState({
                    statusDictCodeList: response.data.value,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // 页码点击触发
    pageNumChange = (e) => {
        console.log('pageNumChange : ', e.current, e.pageSize);
        this.findVehicleBrandPage(e.current, e.pageSize);
    };

    // 查看详情
    queryDetail = (e, record) => {
        console.log('record: ', record);
    };


    render() {
        console.log('03---------render------数据渲染');

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
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                width: 200,
            },
            {
                title: '品牌首字母',
                dataIndex: 'initial',
                key: 'initial',
                width: 100,
            },
            {
                title: 'logo图片地址',
                dataIndex: 'logo',
                key: 'logo',
                width: 500,
            },
            {
                title: 'logo图片',
                dataIndex: 'logoImage',
                key: 'logoImage',
                width: 200,
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                width: 100,
            },
            {
                title: '创建人',
                dataIndex: 'creator',
                key: 'creator',
                width: 120,
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
                width: 120,
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
                        <Button type="link" onClick={e => this.queryDetail(e, record)}>查看</Button>|
                        <Button type="link">修改</Button>|
                        <Button type="link">删除</Button>
                    </Space>
                ),
                fixed: 'right',
                width: 300,
            },
        ];

        // 字典表数据
        const dataSource = [];
        this.state.vehicleBrandList.map((value, index) => {
            return dataSource.push({
                key: value.id,
                id: value.id,
                name: value.name,
                initial: value.initial,
                logo: value.logo,
                logoImage: value.logo ? <img src={value.logo} style={{width: '50px', height: '50px'}} alt=""></img> : <span>无</span>,
                status: this.state.statusDictCodeList.map((statusDictCode, key) => {
                    if (statusDictCode.code === value.status) {
                        return <span key={statusDictCode.id}>{statusDictCode.name}</span>
                    } else {
                        return <span key={statusDictCode.id}>错误</span>
                    }
                }),
                creator: value.creator,
                gmtCreated: value.gmtCreated ? moment(value.gmtCreated).format('YYYY-MM-DD HH:mm:ss') : '',
                modifier: value.modifier,
                gmtModified: value.gmtModified ? moment(value.gmtModified).format('YYYY-MM-DD HH:mm:ss') : "",
            })
        });

        // 翻页控制
        const pagination = {
            size: 'middle',
            total: this.state.totalCount,
            showSizeChanger: true,
            showTotal: (total => `每页 ${10} 条, 共 ${total} 条`),
        };

        const statusSelect = (
            this.state.statusDictCodeList.map((statusDictCode, key) => {
                return <Option value={statusDictCode.code} key={statusDictCode.id}>{statusDictCode.name}</Option>
            })
        );

        return (
            <div style={{'padding': '10px'}}>
                <Row>
                    <Col span={6}>
                        首字母: <Input style={{'width': '100px'}} placeholder={this.state.dictGroup} onChange={this.initialChange}/>
                    </Col>

                    <Col span={4}>
                        名称: <Input style={{'width': '100px'}} placeholder={this.state.nameLike} onChange={this.nameChange}/>
                    </Col>

                    <Col span={6} className='containerRow'>
                        品牌状态:
                        <Select
                            // defaultValue={this.state.orderStatus}
                            style={{'width': '200px'}}
                            onChange={this.statusOnchange}
                            showSearch
                            placeholder="请选择(可多选)"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            mode="multiple"
                        >
                            {statusSelect}
                        </Select>
                    </Col>
                    <Button type="primary" onClick={this.queryPage} onKeyUp={this.onKeyUpFunction}>查询</Button>
                </Row>

                <br/>

                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={pagination}
                    onChange={this.pageNumChange}
                    bordered
                    // rowSelection={rowSelection}
                    scroll={{x: 1300}}
                    size="small"
                    yScroll='enable'
                />
            </div>
        );
    }
}

export default VehicleBrandAxios;
