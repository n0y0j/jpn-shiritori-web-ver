import React, { Component } from "react";
import game_login from "./components/game_login";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import GameForm from "./components/game_form";

class App extends Component {
  // 보여지는 부분
  render() {
    return (
      <Switch>
        <Route exact path="/" component={game_login} />
        <Route path="/game" component={GameForm} />
      </Switch>
    );
  }
}

export default App;
