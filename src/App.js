import React from 'react';
import './assets/css/App.css';
import Home from './components/Home'
import Test01 from './components/Test01'
import List from './components/List'
import Click from './components/Click'
import Event from './components/Event'
import FormTest from './components/FormTest'
import TodoList from './components/TodoList'
import FormTest02 from './components/FormTest02'

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Test01 />
      <Home />
      <List />
      <Click />
      <Event />
      <FormTest />
      <TodoList />
      <FormTest02/>
    </div>
  );
}

export default App;
