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

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <ColorStyle />
      <Home />
      <List />
      <Click />
      <Event />
      <GetInputValue />
      <Mvvm />
      <FormTest/>
      <TodoList/>
    </div>
  );
}

export default App;
