import React, { Component } from 'react';
import { Upload, Modal } from 'antd';
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
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'http://img5.mtime.cn/mt/2019/01/09/171109.88229500_270X405X4.jpg',
                },
                {
                    uid: '-2',
                    name: 'image.png',
                    status: 'done',
                    url: 'http://img5.mtime.cn/mg/2019/02/26/103754.10526344_270X405X4.jpg',
                },
                {
                    uid: '-3',
                    name: 'image.png',
                    status: 'done',
                    url: 'http://img5.mtime.cn/mt/2019/03/01/142658.85498591_270X405X4.jpg',
                },
                {
                    uid: '-4',
                    name: 'image.png',
                    status: 'done',
                    url: 'http://img5.mtime.cn/mt/2019/01/25/105549.53627008_270X405X4.jpg',
                },
                {
                    uid: '-5',
                    name: 'image.png',
                    status: 'error',
                },
            ],
        };
    } handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div style={{'padding':'10px'}}>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

export default AntdUpload;