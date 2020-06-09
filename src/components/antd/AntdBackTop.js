import React, { Component } from 'react';
import { BackTop } from 'antd';

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

class AntdBackTop extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div style={{ height: '600vh', padding: 8 }}>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <BackTop>
                    <div style={style}>UP</div>
                </BackTop>
            </div>
        );
    }
}

export default AntdBackTop;