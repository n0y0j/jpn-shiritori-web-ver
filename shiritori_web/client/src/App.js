import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import GameForm from "./pages/game_form";
import GameRank from "./pages/game_rank";
import GameLogin from "./pages/game_login";

class App extends Component {
  // 보여지는 부분
  render() {
    return (
      <Switch>
        <Route exact path="/" component={GameLogin} />
        <Route path="/game" component={GameForm} />
        <Route path="/rank" component={GameRank} />
      </Switch>
    );
  }
}

export default App;