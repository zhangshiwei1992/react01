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
    console.log('app.js   render  this.props.children: ', this.props.children);
    return (
      <Router>
        <Route className='router'>
          {/* <h1>hello world</h1> */}

          <Link to='/AntdLayout' className='link'>antd布局</Link>
  

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
