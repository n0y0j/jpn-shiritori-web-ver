import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Gamelogo from "../pages/game_logo";
import axios from "axios";

function GameForm(props) {
  const start_word = props.location.state.first_word;
  const name = props.location.state.name;
  const history = useHistory();

  const [userName, setUserName] = useState(name);
  const [word, setWordState] = useState("");
  const [count, setCount] = useState(0);
  const [useWord, setUseWord] = useState([]);
  const [mean, setMean] = useState([]);
  const [firstword, setFirstWord] = useState(start_word);

  const headers = {
    "Content-Type": "application/json",
  };

  const handleChange = (e) => {
    setWordState({
      word: e.target.value,
    });
  };

  const handleClick = async () => {
    var check = word.word.charAt(0);
    var play = false;
    if (firstword === check) {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/word/",
        word,
        headers
      );

      if (response.data.valid === true) {
        play = true;
        if (useWord.length < 6) {
          setUseWord((prevArray) => [...prevArray, word.word]);
        }
        setFirstWord(word.word.charAt(word.word.length - 1));
        setMean((prevArray) => [response.data.word_mean]);
        setCount(count + 1);
      }
    }

    if (play === false) {
      const response_rank = await axios.post(
        "http://127.0.0.1:8000/api/rank/",
        {
          userName,
          count,
        },
        headers
      );

      history.push("/");
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      width: theme.spacing(16),
      height: theme.spacing(16),
      margin: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Gamelogo />
      <Grid container direction="column" justify="center" alignItems="center">
        <div className={classes.root}>
          <div>
            <Grid item xs={6}>
              <Paper className={classes.paper}>{firstword}</Paper>
            </Grid>
          </div>
          <div>
            <Grid item xs={12}>
              <Paper className={classes.paper}>{useWord}</Paper>
            </Grid>
          </div>
          <div>
            <Grid item xs={9}>
              <Paper className={classes.paper}>{mean}</Paper>
            </Grid>
          </div>
          <div>
            <Grid item xs={9}>
              <form>
                <TextField
                  id="standard-basic"
                  label="input word"
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  입력
                </Button>
              </form>
            </Grid>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default GameForm;
