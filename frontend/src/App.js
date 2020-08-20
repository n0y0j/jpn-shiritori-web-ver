import React, { Component } from "react";
import game_login from "./components/game_login";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import GameForm from "./components/game_form";
import GameRank from "./components/game_rank";

class App extends Component {
  // 보여지는 부분
  render() {
    return (
      <Switch>
        <Route exact path="/" component={game_login} />
        <Route path="/game" component={GameForm} />
        <Route path="/rank" component={GameRank} />
      </Switch>
    );
  }
}

export default App;
