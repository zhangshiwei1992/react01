import React, { Component } from 'react';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class AntdUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // 已上传图片
            fileList: [
                {
                    uid: '1',
                    name: 'image.png',
                    status: 'done',
                    url: 'http://img5.mtime.cn/mt/2019/01/09/171109.88229500_270X405X4.jpg',
                },
                {
                    uid: '2',
                    name: 'image.png',
                    status: 'done',
                    url: 'http://img5.mtime.cn/mg/2019/02/26/103754.10526344_270X405X4.jpg',
                },
            ],

            // 预览图片是否展示,地址,标题
            previewVisible: false,
            previewImageUrl: '',
            previewTitle: '',
        };
    }



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

    // 文件变动
    fileChange = ({ fileList }) => {
        console.log('文件变动------fileChange');
        this.setState({
            fileList: fileList
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

    fileUpload = () => {
        var _this = this;
        console.log('文件上传------getFileUrl');
        const fileUplod = {
            name: 'file',
            // 文件上传接口和需要的传参
            action: 'http://biz-dev.miaogoche.cn/file/upload?fileCode=FC15263649680000000001&userId=zsw&channelId=1&businessCode=TEST0001',
            // 接受上传的文件类型：此处为.doc格式
            accept: 'image/png, image/jpeg,image/jpg, application/pdf, application/zip, application/x-zip-compressed',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                console.log('============上传完成================');
                console.log('上传结果info : ', info);
                console.log('上传结果info.file.status : ', info.file.status);

                _this.setState({
                    fileList: info.fileList
                });

                //上传文件改变时的状态
                if (info.file.status !== 'uploading') {
                    console.log('============uploading================');
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    console.log('============done================');
                    message.success(`${info.file.name} 上传成功！`);


                } else if (info.file.status === 'error') {
                    console.log('============error================');
                    message.error(`${info.file.name} 上传失败！`);
                }
            },
        };
        return fileUplod;
    }

    render() {
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div style={{ 'padding': '10px' }}>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={this.state.fileList}
                    onPreview={this.imagePreview}
                    onChange={this.fileChange}
                    multiple={true}
                >
                    {this.state.fileList.length >= 8 ? null : uploadButton}
                </Upload>




                <Modal
                    visible={this.state.previewVisible}
                    title={this.state.previewTitle}
                    onCancel={this.imagePreviewCancel}
                    footer={null}
                >
                    <img alt="example" style={{ width: '100%' }} src={this.state.previewImageUrl} />
                </Modal>

                <hr />
                <hr />
                <hr />
                <br />
                <br />

                <h1>真实上传到服务器:</h1>
                <Upload
                    {...this.fileUpload()}
                    showUploadList={true}
                    listType="picture-card"
                    fileList={this.state.fileList}
                    onPreview={this.imagePreview}
                    beforeUpload={this.beforeUploadFunction}
                    onRemove={this.onRemoveFunction}
                >
                    {this.state.fileList.length >= 8 ? null : uploadButton}
                </Upload>

            </div>
        );
    }
}

export default AntdUpload;