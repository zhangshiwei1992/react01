import React, { Component } from 'react';
import '../assets/css/red.css'

class Test01 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '张三',
            age: 18,
            info: {
                address: '上海'
            },
            key: 'A',
            value: 'B',
            color: 'red',
            style: {
                color: 'green',
                fontSize: '40px'
            }
        };
    }

    render() {
        return (
            <div>  
                <hr />
                <h1 className='red'>className紅色</h1>
                <h2>姓名: {this.state.name},年龄: {this.state.age},地址: {this.state.info.address}</h2>
                <hr />
                <h1 className={this.state.color}>红色 : {this.state.key} - {this.state.value}</h1>
                <h1 style={{ 'color': 'blue' }}>蓝色 : {this.state.key} - {this.state.value}</h1>
                <h1 style={this.state.style}>绿色并且40px : {this.state.key} - {this.state.value}</h1>
            </div>
        );
    }
}
export default Test01;