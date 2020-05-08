import React, { Component } from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '孙悟空'
        }
    }
    alertFun = (event) => {
        alert('获取dom节点 ' + event.target + ' 修改dom节点的样式');
        // 
        event.target.style.background = event.target.style.background === 'red' ? 'white' : 'red';
        // console.log(event);
        // 获取dom节点属性
        alert('获取dom节点属性 - aid : ' + event.target.getAttribute('aid'));
    }
    changeInputName = (event) => {
        console.log('输入值: ' + event.target.value);
        this.setState({
            name: event.target.value
        });
    }
    getInputName = () => {
        alert(this.state.name);
    }
    render() {
        return (
            <div>
                <hr />
                <button aid='自定义节点属性aid的值' onClick={this.alertFun}>事件对象测试 , 名称: {this.state.name}</button>
                <br /> <br />
                姓名: <input onChange={this.changeInputName}></input>
                <br /> <br />
                <button onClick={this.getInputName}>获取输入框的值</button>
                <hr />
            </div>
        )
    }
}

export default Event;