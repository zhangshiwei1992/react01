import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import UserInfo from '../layout/user/UserInfo';
import MainInfo from '../layout/user/MainInfo';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='layout_content'>
                <div className='left'>
                    <Link to='/User/'>个人中心</Link>  <br />
                    <Link to='/User/UserInfo'>用户信息</Link>
                </div>
                <div className='right'>
                    <Route exact path='/User/' component={MainInfo}></Route>
                    <Route path='/User/UserInfo' component={UserInfo}></Route>
                </div>
            </div>
        );
    }
}

export default User;