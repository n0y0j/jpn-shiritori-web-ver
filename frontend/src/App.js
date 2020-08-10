import React, { Component } from 'react';
import Gamelogin from './components/Gamelogin';
import Main from './pages/Main'
import { Route, Switch } from 'react-router-dom';
import "./App.css";

class App extends Component {

  // 보여지는 부분
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Gamelogin} />
        <Route path='/game' component={Main} />
      </Switch>
    );
  }
}

export default App;