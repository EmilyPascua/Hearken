import React from 'react';
import './App.css';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Reply from './components/reply/Reply.js';
import Settings from './components/settings/Settings.js';
import Stories from './components/stories/Stories.js';
import Story from './components/story/Story.js';

class App extends React.Component {

  render(){
    return (
      <div>
        <Home/>
        <Login/>
        <Settings/>
      </div>
    );
  }
}

export default App;