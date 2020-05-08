import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false,
            userName: '',
            password: ''
        };
    }

    componentDidMount(){
       this.setState({
            loginFlag: false 
        });
    }

    userNameChange = (e) => {
        console.log('用户名:  ' + e.target.value);
        this.setState({
            userName: e.target.value
        })
    }

    passwordChange = (e) => {
        console.log('密码:  ' + e.target.value);
        this.setState({
            password: e.target.value
        })
    }

    loginSubmit = () => {
        if ('admin' === this.state.userName && '123456' === this.state.password) {
            this.setState({
                loginFlag: true,
            });
        }
        alert(this.state.userName + ' ======= ' + this.state.password);
    }

    render() { 
        if (this.state.loginFlag) {
            return <Redirect to={{ pathName: '/' }}></Redirect>
        }

        return (
            <div style={{ 'padding': '10px' }}>
                <form>
                    用户名:<input type='text' onChange={this.userNameChange}></input> <br /><br />
                    密码:<input type='password' onChange={this.passwordChange} ></input> <br /><br />
                    <button type='submit' onClick={this.loginSubmit}>登录</button>
                </form>
            </div>
        );
    }
}

export default Login;