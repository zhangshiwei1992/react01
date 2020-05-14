import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        console.log('this.props : ',this.props);
        console.log('this.props.childRouterList : ',this.props.childRouterList);
    }
    render() {
        return (
            <div className='layout_content'>
                <div className='left'>
                    <Link to='/User/'>个人中心</Link>  <br /> <br />
                    <Link to='/User/UserInfo'>用户信息</Link>
                </div>
                <div className='right'>
                    {/* <Route exact path='/User/' component={MainInfo}></Route>
                    <Route path='/User/UserInfo' component={UserInfo}></Route> */}
                    {
                        this.props.childRouterList.map((value,key)=>{
                            if (value.exact) {
                                return <Route key={key} exact path={value.path} component={value.component}   /> 
                              } else {
                                return <Route key={key} path={value.path} component={value.component}   /> 
                              }
                        })
                    }
                </div>
            </div>
        );
    }
}

export default User;