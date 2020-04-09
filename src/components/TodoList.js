import React from 'react';
import '../assets/css/index.css';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
            todoList: [],
        };
    }

    todoInput = (event) => {
        this.setState({
            newTodo: event.target.value
        })
    }

    addData = () => {
        if (this.state.newTodo === '') {
            alert('请编辑待办事项');
        } else {
            var tempList = this.state.todoList;
            tempList.push({
                code: tempList.length,
                name: this.state.newTodo,
                // 1 - 未做;   2 - 已完成
                status: '1'
            });

            /// localStorage不能存入数组,转成json字符串再存入
            localStorage.setItem('todoList', JSON.stringify(tempList));

            this.setState({
                todoList: tempList,
                newTodo: ''
            })
        }
    }

    inputOnKeyUp = (e) => {
        if (this.state.newTodo === '') {
            alert('请编辑待办事项');
        } else {
            if (e.keyCode === 13) {
                var tempList = this.state.todoList;
                tempList.push({
                    code: tempList.length,
                    name: this.state.newTodo,
                    // 1 - 未做;   2 - 已完成
                    status: '1'
                });

                /// localStorage不能存入数组,转成json字符串再存入
                localStorage.setItem('todoList', JSON.stringify(tempList));

                this.setState({
                    todoList: tempList,
                    newTodo: ''
                })
            }
        }
    }

    deleteData = (index) => {
        var tempList = this.state.todoList;
        tempList.splice(index, 1);

        /// localStorage不能存入数组,转成json字符串再存入
        localStorage.setItem('todoList', JSON.stringify(tempList));
        this.setState({
            todoList: tempList
        })
    }

    setUndo = (index) => {
        var tempList = this.state.todoList;
        tempList[index].status = '1';

        /// localStorage不能存入数组,转成json字符串再存入
        localStorage.setItem('todoList', JSON.stringify(tempList));
        this.setState({
            todoList: tempList
        })
    }

    setAlreadyDo = (index) => {
        var tempList = this.state.todoList;
        tempList[index].status = '2';

        /// localStorage不能存入数组,转成json字符串再存入
        localStorage.setItem('todoList', JSON.stringify(tempList));
        this.setState({
            todoList: tempList
        })
    }

    /// react页面渲染完成会加载一次的生命周期函数
    componentDidMount() { 
        var localStorageList = JSON.parse(localStorage.getItem('todoList'));
        // 如果缓存list存在
        if (localStorageList) {
            this.setState({
                todoList: localStorageList
            });
        }
    }

    render() {
        return (
            <div>
                <hr />
            请输入待办事项: <input onChange={this.todoInput} value={this.state.newTodo} onKeyUp={this.inputOnKeyUp}></input>
                <button onClick={this.addData}>新增+</button>
                <br />

                <h1>待办事项:</h1>
                <ul className='ul'>
                    {this.state.todoList.map((value, index) => {
                        if (value.status === '1') {
                            return (
                                <li key={index}>
                                    <input type='checkbox' checked={value.status === '2'} onChange={this.setAlreadyDo.bind(this, index)}></input>
                                    {value.name} ---
                                    <button onClick={this.deleteData.bind(this, index)}>删除-</button>
                                </li>
                            )
                        }
                    })}
                </ul>

                <h1>已完成事项:</h1>
                <ul className='ul'>
                    {// 删除时,用到this,要注意this指向,使用箭头函数
                        this.state.todoList.map((value, index) => {
                            if (value.status === '2') {
                                return (
                                    <li key={index}>
                                        <input type='checkbox' checked={value.status === '2'} onChange={this.setUndo.bind(this, index)}></input>
                                        {value.name} ---
                                        <button onClick={this.deleteData.bind(this, index)}>删除-</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <hr />
            </div>
        );
    }
}

export default TodoList;