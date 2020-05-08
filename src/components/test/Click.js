import React, { Component } from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '孙悟空',
            name2: '齐天大圣',
            name3: '斗战胜佛',
        }
        this.getData = this.getData.bind(this);
    }
    alertFun() {
        alert('弹框触发');
    }
    alertData() {
        alert(this.state.name);
    }
    getData() {
        alert(this.state.name2);
    }
    getName3 = () => {
        alert(this.state.name3);
    }
    updateName = () => {
        this.setState({
            name: '孙悟空' === this.state.name ? '新的新的 孙行者 ' : '孙悟空'
        });
    };
    setName = (str) => {
        this.setState({
            name: '孙悟空' === this.state.name ? str : '孙悟空'
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.alertFun}>onClick触发测试 , 名称: {this.state.name}</button>
                <br /> <br />
                <button onClick={this.alertData.bind(this)}>获取数据-第1种改变this指向-触发时绑定</button>
                <br /> <br />
                <button onClick={this.getData}>获取数据-第2种改变this指向-构造方法绑定</button>
                <br /> <br />
                <button onClick={this.getName3}>获取数据-第3种改变this指向-箭头函数指向当前的上下文</button>
                <br /> <br />
                <button onClick={this.updateName}>点击修改名称</button>
                <br /> <br />
                <button onClick={this.setName.bind(this,'弼马温')}>点击传递参数</button>
                <br /> <br />
            </div>
        )
    }
}

export default Click;