import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestList extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return (
            <div style={{ 'padding': '10px' }}> 
                <Link to='/VehicleBrandAxios' className='link'>品牌汇总</Link>
                <Link to='/ColorStyle' className='link'>ColorStyle</Link>
                <Link to='/ImageImport' className='link'>ImageImport</Link>
                <Link to='/Click' className='link'>Click</Link>
                <Link to='/Event' className='link'>Event</Link>
                <Link to='/GetInputValue' className='link'>GetInputValue</Link>
                <Link to='/Mvvm' className='link'>Mvvm</Link>
                <Link to='/FormTest' className='link'>FormTest</Link>
                <Link to='/TodoList' className='link'>TodoList</Link>
                <Link to='/Demo' className='link'>Demo</Link>
                <Link to='/News' className='link'>News</Link>
                <Link to='/Book' className='link'>Book</Link>
                <Link to='/Logins' className='link'>登录页面-js实现路由跳转</Link>
                <Link to='/User' className='link'>布局-嵌套路由-用户中心</Link>
                <Link to='/Shop' className='link'>商店信息</Link>
                <Link to='/Home' className='link'>Home菜品页面</Link>
            </div>
        )
    }
}

export default TestList;