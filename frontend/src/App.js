import React, { Component } from "react";
import game_login from "./components/game_login";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Game_ui from "./pages/game_ui";

class App extends Component {
  // 보여지는 부분
  render() {
    return (
      <Switch>
        <Route exact path="/" component={game_login} />
        <Route path="/game" component={Game_ui} />
      </Switch>
    );
  }
}

export default App;
