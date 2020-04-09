import React from 'react';
class GetInputValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '亚瑟'
        };
    }
    nameChange = () => {
        let val = this.refs.yaseName.value;
        this.setState({
            name: val
        });
    }
    getInputValue = () => {
        alert(this.state.name);
    }
    onKeyUpFunction = (event) => {
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            alert('点击了回车键 ' + event.target.value);
        }
    }
    inputChange=(event)=>{ 
        console.log('数据修改:  ' + event.target.value);
    }
    render() {
        return (
            <div>
                <hr />
                {/* 测试ref获取输入框的值: <input ref='yaseName' onChange={this.nameChange} ></input> */}
                {/* <button onClick={this.getInputValue}>获取输入框的值</button> */}
                <br />
                键盘事件-按回车键弹出输入框的值: <input onKeyUp={this.onKeyUpFunction} onChange={this.inputChange} ></input>
                <hr />
            </div>
        );
    }
}

export default GetInputValue;