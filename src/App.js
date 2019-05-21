import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import GroupChat from './components/GroupChat';
import chat from './lib/chat';

class App extends Component {
  constructor(props) {
    super(props);
    chat.init();
  }
  render() {
    return (
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path='/login' component={Login} />
        <Route path='/chat' component={GroupChat} />
      </Switch>
    );
  }
}

export default App;