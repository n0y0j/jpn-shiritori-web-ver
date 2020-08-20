import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Gamelogo from "../pages/game_logo";

function Gamelogin() {
  var arrWord = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "を",
  ];

  var start_char = arrWord[Math.floor(Math.random() * arrWord.length)];
  const [startState, setStartState] = useState({
    name: "",
    first_word: start_char,
  });

  const history = useHistory();
  const handleChange = (e) => {
    setStartState({
      ...startState,
      name: e.target.value,
    });
  };

  const handleClick = () => {
    history.push("/game", startState);
  };

  const moveRanking = () => {
    history.push("/rank");
  };

  return (
    <div>
      <Gamelogo />
      <Grid container direction="column" justify="center" alignItems="center">
        <h1>Welcome to the shiritori game</h1>
        <p>Please enter your nickname</p>
        <form>
          <TextField
            id="standard-basic"
            label="enter your nickname.."
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={handleClick}>
            입력
          </Button>
          <Button variant="contained" color="primary" onClick={moveRanking}>
            랭킹
          </Button>
        </form>
      </Grid>
    </div>
  );
}

export default Gamelogin;
