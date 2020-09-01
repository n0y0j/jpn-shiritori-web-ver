import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
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

  const useStyles = makeStyles((theme) => ({
    div: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(7),
    },
    form: {
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    ranking_button: {
      margin: theme.spacing(5),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Gamelogo />
      <Grid container direction="column" justify="center" alignItems="center">
        <div className={classes.div} align="center">
          <h1>Welcome to the shiritori game</h1>
        </div>
        <form className={classes.form}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            label="enter your nickname.."
            onChange={handleChange}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClick}
            style={{ marginLeft: "20px" }}
          >
            입력
          </Button>
        </form>
        <div className={classes.ranking_button}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: "320px", height: "60px" }}
            onClick={moveRanking}
          >
            랭킹
          </Button>
        </div>
      </Grid>
    </div>
  );
}

export default Gamelogin;
