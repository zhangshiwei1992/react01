import React from 'react';
import './assets/css/App.css';
import ImageImport from './components/test/ImageImport'
import ColorStyle from './components/test/ColorStyle'
import List from './components/test/List'
import Click from './components/test/Click'
import Event from './components/test/Event'
import GetInputValue from './components/test/GetInputValue'
import Mvvm from './components/test/Mvvm'
import FormTest from './components/test/FormTest'
import TodoList from './components/test/TodoList'
import Demo from '@liumcb/react-demo';
import VehicleBrandAxios from './components/test/VehicleBrandAxios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import News from './components/test/News';
import NewsDetail from './components/test/NewsDetail';
import Book from './components/test/Book';
import BookDetail from './components/test/BookDetail';
import Home from './components/Product/Home';
import ProductContent from './components/Product/ProductContent';
import Login from './components/login/Login';
import User from './components/layout/User';

import './assets/css/index.css';
import './assets/css/basic.css'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route className='router'>
          <h1>hello world</h1>

          <Link to='/'>  品牌汇总  </Link>
          <Link to='/ColorStyle'>  ColorStyle  </Link>
          <Link to='/ImageImport'>  ImageImport  </Link>
          <Link to='/List'>  List  </Link>
          <Link to='/Click'>  Click  </Link>
          <Link to='/Event'>  Event  </Link>
          <Link to='/GetInputValue'>  GetInputValue  </Link>
          <Link to='/Mvvm'>  Mvvm  </Link>
          <Link to='/FormTest'>  FormTest  </Link>
          <Link to='/TodoList'>  TodoList  </Link>
          <Link to='/Demo'>  Demo  </Link>
          <Link to='/News'>  News  </Link>
          <Link to='/Book'>  Book  </Link>
          <Link to='/Logins'>  登录页面 js实现路由跳转  </Link>
          <Link to='/User'> - 布局 嵌套路由 -</Link>
          <Link to='/Home'>  ---Home菜品页面---  </Link>

          <Route exact path='/' component={VehicleBrandAxios}></Route>
          <Route path='/ColorStyle' component={ColorStyle}></Route>
          <Route path='/ImageImport' component={ImageImport}></Route>
          <Route path='/List' component={List}></Route>
          <Route path='/Click' component={Click}></Route>
          <Route path='/Event' component={Event}></Route>
          <Route path='/GetInputValue' component={GetInputValue}></Route>
          <Route path='/Mvvm' component={Mvvm}></Route>
          <Route path='/FormTest' component={FormTest}></Route>
          <Route path='/TodoList' component={TodoList}></Route>
          <Route path='/Demo' component={Demo}></Route>
          <Route path='/News' component={News}></Route>
          <Route path='/NewsDetail/:aid' component={NewsDetail}></Route>
          <Route path='/Book' component={Book}></Route>
          <Route path='/BookDetail' component={BookDetail}></Route>
          <Route path='/Home' component={Home}></Route>
          <Route path='/Login' component={Login}></Route>
          <Route path='/ProductContent/:id' component={ProductContent}></Route> 
          <Route path='/User' component={User}></Route>
        </Route>
      </Router>
    );
  }
}



export default App;
