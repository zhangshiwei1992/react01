import React from 'react';   
import '../assets/css/index.css';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    getTodoListData=()=>{
        alert('获取父组件的参数: ',this.props.todoList.state.name);
    }
    render() {
        return (
            // <div className= "wrapper">
            <div>
                当前登录人: {this.props.name}  -- {this.props.num}
                <br/> 
                <button onClick = {this.props.alertFunction}>测试父组件传递方法</button>
                <button onClick = {this.props.todoList.alertAll}>测试父组件整个传递过来啦</button>
                <button onClick = {this.getTodoListData}>测试父组件整个传递过来啦</button>
                <button onClick = {this.props.todoList.getChildData.bind(this,'孙行者')}>子组件给父组件传递数据</button>
                
                {/* <div className= "text" data-text= "2020">2020</div> */}
               
            </div> 
        );
    }
}

Header.defaultProps = {
    name : '默认姓名-哈哈哈'
}

Header.propTypes = {
    num:PropTypes.number
}

export default Header;