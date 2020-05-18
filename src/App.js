import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/css/index.css';
import './assets/css/basic.css';
import 'antd/dist/antd.css';
import routerList from '../src/router/Router.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <Router>
        <Route className='router'>
          {/* <h1>hello world</h1> */}

          <Link to='/' className='link'>品牌汇总</Link>
          <Link to='/AntdDesign' className='link'>antd按钮</Link>
          <Link to='/AntdLayout' className='link'>antd布局</Link>
          <Link to='/DictCode' className='link'>字典表</Link>
 
 
          {/* <Link to='/ColorStyle' className='link'>ColorStyle</Link>
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
          <Link to='/Home' className='link'>Home菜品页面</Link> */}

          {
            routerList.map((value, key) => {
              if (value.exact) {
                /** return <Route key={key} exact path={value.path} component={value.component}   /> */
                /** 嵌套路由父子组件传值 */
                return <Route key={key} exact path={value.path}
                  render={props => (
                    <value.component {...props} childRouterList={value.childRouterList} />
                  )}
                />
              } else {
                return <Route key={key} path={value.path}
                  render={props => (
                    <value.component {...props} childRouterList={value.childRouterList} />
                  )}
                />
              }
            })
          }

        </Route>
      </Router>
    );
  }
}

export default App;
