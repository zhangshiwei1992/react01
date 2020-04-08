import React from 'react';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: '后羿' };
    }
    inputChange = (event) => {
        this.setState({
            userName: event.target.value
        });
    }
    updateName = () => {
        this.setState({
            userName: '亚瑟' === this.state.userName ? '典韦' : '亚瑟'
        });
    }
    render() {
        return (
            <div>
                <hr />
                双向数据绑定 : 数据model改变影响视图view, 视图view改变影响数据model
                <br />
                userName: {this.state.userName}
                <br />
                姓名: <input value={this.state.userName} onChange={this.inputChange}></input>
                <button onClick={this.updateName}>改变userName</button>
                <br /> <br /> <br />
            </div>
        );
    }
}

export default TodoList;