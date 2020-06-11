import React, { Component } from 'react';
import { Button, Col, Input, Row, Select, Space, Table, Modal, message, Form, Upload } from "antd";
import moment from 'moment';
import Config from '../../config/Config';
import axios from 'axios';
import 'moment/locale/zh-cn';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class VehicleBrandAxios extends Component {
    constructor(props) {
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
            vehicleBrandDetailVisible: false,
            vehicleBrandDetail: {
                name: '',
                fullName: '',
                initial: '',
                logo: '',
            },
            vehicleBrandSAddVisible: false,
            vehicleBrandAdd: {
                name: null,
                fullName: null,
                initial: null,
                logo: null,
            },

            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            fileList: [
                // {
                //     uid: '111',
                //     name: 'image.png',
                //     status: '1',
                //     url: 'http://img5.mtime.cn/mt/2019/01/09/171109.88229500_270X405X4.jpg',
                // },
            ],
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
    statusOnchange = (value) => {
        console.log('状态下拉框修改: ', value);
        this.setState({
            status: value,
        })
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
    findBrandPage = () => {
        this.findVehicleBrandPage(this.state.pageNum, this.state.pageSize);
    };

    // 字典表 - 状态
    findStatusDictCodeList = () => {
        var url = Config.host + '/dictCode/findList';
        axios.post(url, {
            'dictGroup': 'PACKAGE_STATUS',
        })
            .then((response) => {
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
        this.findVehicleBrandPage(e.current, e.pageSize);
    };

    // 展示详情对话框
    showDetailModel = (e, record) => {
        this.setState({
            vehicleBrandDetailVisible: true,
            vehicleBrandDetail: record,
        });
    };

    // 不展示详情对话框
    notShowDetailModel = () => {
        this.setState({
            vehicleBrandDetailVisible: false,
        });
    };

    // 展示新增对话框
    showAddModel = () => {
        this.setState({
            vehicleBrandAddVisible: true,
        })
    };

    // 新增对话框 - 取消
    notShowAddModel = (e) => {
        this.setState({
            vehicleBrandAddVisible: false,
        });
    };

    // 新增 - 提交
    addSubmit = (formValues) => {
        console.log('formValues: ', formValues);
        if (!this.state.vehicleBrandAddLogo) {
            return message.warning('请上传logo图片!');
        }

        var brandAdd = {
            name: formValues.name,
            fullName: formValues.fullName,
            initial: formValues.initial,
            logo: this.state.vehicleBrandDetail.logo
        }
        var url = Config.host + '/vehicleBrand/create';
        axios.post(url, brandAdd)
            .then((response) => {
                console.log('新增 - 提交 - data: ', response.data);
                if (!response.data.success) {
                    Modal.confirm({
                        title: 'Confirm',
                        icon: <ExclamationCircleOutlined />,
                        content: response.data.errorMsg,
                        okText: '确认',
                        cancelText: '取消',
                    });
                } else {
                    this.setState({
                        vehicleBrandAddVisible: false,
                    });
                    message.success('新增成功!');
                    this.findBrandPage();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // 图片预览
    imagePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewVisible: true,
            previewImageUrl: file.url || file.preview,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    // 图片预览 - 取消
    imagePreviewCancel = () => {
        this.setState({
            previewVisible: false
        })
    };


    // 上传之前--校验
    beforeUploadFunction = (file, fileList) => {
        console.log('上传之前-校验');
        console.log('上传之前-校验-file : ', file);
        console.log('上传之前-校验-fileList: ', fileList);
    }

    // 删除
    onRemoveFunction = (file) => {
        console.log('onRemoveFunction');
        console.log('onRemoveFunction-file : ', file);
    }

    // 文件上传
    fileUpload = () => {
        var _this = this;
        const fileUplod = {
            name: 'file',
            // 文件上传接口和需要的传参
            action: Config.host + '/file/upload?fileCode=FC15263649680000000001&userId=zsw&channelId=1&businessCode=TEST0001',
            // 接受上传的文件类型：此处为.doc格式
            accept: 'image/png, image/jpeg,image/jpg, application/pdf, application/zip, application/x-zip-compressed',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                console.log('上传结果info : ', info);
                console.log('上传结果info.file.status : ', info.file.status);

                _this.setState({
                    fileList: info.fileList
                });

                //上传文件改变时的状态  
                if (info.file.status === 'done') {
                    console.log('============done================');
                    message.success(`${info.file.name} 上传成功！`);
                    _this.setState({
                        vehicleBrandDetail: {
                            logo: info.file.response.value
                        }
                    });

                } else if (info.file.status === 'error') {
                    console.log('============error================');
                    message.error(`${info.file.name} 上传失败！`);
                }
            },
        };
        return fileUplod;
    }


    render() {
        console.log('------------------render---------------------------');
        console.log('----------vehicleBrandAddLogo: ', this.state.vehicleBrandAddLogo);
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
                title: '全名称',
                dataIndex: 'fullName',
                key: 'fullName',
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
                        <Button type="link" onClick={e => this.showDetailModel(e, record)}>查看</Button>|
                        <Button type="link" onClick={e => this.showDetailModel(e, record)}>修改</Button>|
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
                fullName: value.fullName,
                initial: value.initial,
                logo: value.logo,
                logoImage: value.logo ? <img src={value.logo} style={{ width: '50px', height: '50px' }} alt=""></img> : <span>无</span>,
                status: this.state.statusDictCodeList.map((statusDictCode, key) => {
                    if (statusDictCode.code === value.status) {
                        return <span key={statusDictCode.id}>{statusDictCode.name}</span>
                    } else {
                        return <span key={statusDictCode.id}></span>
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

        // 状态下拉框
        const statusSelect = (
            this.state.statusDictCodeList.map((statusDictCode, key) => {
                return <Option value={statusDictCode.code} key={statusDictCode.id}>{statusDictCode.name}</Option>
            })
        );

        // 上传图片按钮
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );




        return (
            <div style={{ 'padding': '10px' }}>
                <Row>
                    <Col span={4}>
                        首字母: <Input style={{ 'width': '100px' }} placeholder={this.state.dictGroup} onChange={this.initialChange} />
                    </Col>

                    <Col span={4}>
                        名称: <Input style={{ 'width': '100px' }} placeholder={this.state.nameLike} onChange={this.nameChange} />
                    </Col>

                    <Col span={4}>
                        品牌状态:
                        <Select
                            style={{ 'width': '200px' }}
                            onChange={this.statusOnchange}
                            showSearch
                            placeholder="请选择(单选)"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        // mode="multiple"
                        >
                            {statusSelect}
                        </Select>
                    </Col>
                </Row>

                <br />
                <div style={{ 'textAlign': 'right' }}>
                    <Button type="primary" onClick={this.findBrandPage} onKeyUp={this.onKeyUpFunction}>查询</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="primary" onClick={this.showAddModel}>新增</Button>
                </div>

                <br />

                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={pagination}
                    onChange={this.pageNumChange}
                    bordered
                    // rowSelection={rowSelection}
                    scroll={{ x: 1300 }}
                    size="small"
                    yScroll='enable'
                />

                <Modal
                    title="品牌详情"
                    visible={this.state.vehicleBrandDetailVisible}
                    footer={null}
                    width='800px'
                    onCancel={this.notShowDetailModel}
                >
                    <Form
                        {...layout}
                        onFinish={this.addSubmit}
                    >
                        <Form.Item
                            label="名称"
                        >
                            <Input value={this.state.vehicleBrandDetail ? this.state.vehicleBrandDetail.name : ''} />
                        </Form.Item>

                        <Form.Item
                            label="全名称"
                        >
                            <Input value={this.state.vehicleBrandDetail ? this.state.vehicleBrandDetail.fullName : ''} />
                        </Form.Item>

                        <Form.Item
                            label="首字母"
                        >
                            <Input value={this.state.vehicleBrandDetail ? this.state.vehicleBrandDetail.initial : ''} />
                        </Form.Item>


                        <Form.Item
                            label="logo地址"
                            disabled
                        >
                            <Input value={this.state.vehicleBrandDetail ? this.state.vehicleBrandDetail.logo : ''} />
                        </Form.Item>

                        <Form.Item
                            label="logo图片"
                        >
                            {
                                this.state.vehicleBrandDetail.logo ? <img src={this.state.vehicleBrandDetail.logo} style={{ width: '50px', height: '50px' }} alt="" /> : ''
                            }
                        </Form.Item>
                    </Form>
                </Modal>

                <Modal
                    title="品牌新增"
                    visible={this.state.vehicleBrandAddVisible}
                    onCancel={this.notShowAddModel}
                    width='800px'
                    footer={null}
                >
                    {
                        <Form
                            {...layout}
                            onFinish={this.addSubmit}
                        >
                            <Form.Item
                                label="名称"
                                name="name"
                                rules={[{ required: true, message: '请填写名称!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="全名称"
                                name="fullName"
                                rules={[{ required: true, message: '请填写全名称!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="首字母"
                                name="initial"
                                rules={[{ required: true, message: '请填写首字母!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="logo地址"
                                name="logo"
                                disabled
                            >
                                <Input value={this.state.vehicleBrandDetail ? this.state.vehicleBrandDetail.logo : ''} />
                            </Form.Item>

                            <Upload
                                {...this.fileUpload()}
                                showUploadList={true}
                                listType="picture-card"
                                fileList={this.state.fileList}
                                onPreview={this.imagePreview}
                                beforeUpload={this.beforeUploadFunction}
                                onRemove={this.onRemoveFunction}
                            >
                                {this.state.fileList.length >= 1 ? null : uploadButton}
                            </Upload>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    提交
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button type="primary" onClick={this.notShowAddModel}>
                                    取消
                                </Button>
                            </Form.Item>
                        </Form>
                    }
                </Modal>
            </div>
        );
    }
}

export default VehicleBrandAxios;
