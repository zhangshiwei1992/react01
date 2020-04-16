import React from 'react';
import './assets/css/App.css';
import Home from './components/Home'
import ColorStyle from './components/ColorStyle'
import List from './components/List'
import Click from './components/Click'
import Event from './components/Event'
import GetInputValue from './components/GetInputValue'
import Mvvm from './components/Mvvm'
import FormTest from './components/FormTest'
import TodoList from './components/TodoList'
import Demo from '@liumcb/react-demo';
import Axios from './components/Axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
          <Link to='/Home'>  Home  </Link>
          <Link to='/List'>  List  </Link>
          <Link to='/Click'>  Click  </Link>
          <Link to='/Event'>  Event  </Link>
          <Link to='/GetInputValue'>  GetInputValue  </Link>
          <Link to='/Mvvm'>  Mvvm  </Link>
          <Link to='/FormTest'>  FormTest  </Link>
          <Link to='/TodoList'>  TodoList  </Link>
          <Link to='/Demo'>  Demo  </Link>

          <Route exact path='/' component={Axios}></Route>
          <Route path='/ColorStyle' component={ColorStyle}></Route>
          <Route path='/Home' component={Home}></Route>
          <Route path='/List' component={List}></Route>
          <Route path='/Click' component={Click}></Route>
          <Route path='/Event' component={Event}></Route>
          <Route path='/GetInputValue' component={GetInputValue}></Route>
          <Route path='/Mvvm' component={Mvvm}></Route>
          <Route path='/FormTest' component={FormTest}></Route>
          <Route path='/TodoList' component={TodoList}></Route>
          <Route path='/Demo' component={Demo}></Route>
        </Route>
      </Router>
    );
  }
}



export default App;
