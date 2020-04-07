import React from 'react';
import './assets/css/App.css';
import Home from './components/Home'
import Test01 from './components/Test01'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Test01 />
      <Home />
      <List />
    </div>
  );
}

export default App;
