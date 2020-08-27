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
        if (useWord.length < 5) {
          setUseWord((prevArray) => [...prevArray, word.word]);
        } else {
          var temp_word_list = useWord;
          temp_word_list.shift();
          temp_word_list.push(word.word);

          setUseWord(temp_word_list);
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
      alert("Try again");
      history.push("/");
    }
  };

  const useStyles = makeStyles((theme) => ({
    first_paper: {
      fontSize: "80px",
      fontWeight: "bold",
      textAlign: "center",
      width: theme.spacing(20),
      height: theme.spacing(16),
      margin: theme.spacing(5),
    },
    useWord_paper: {
      fontSize: "40px",
      textAlign: "center",
      width: theme.spacing(25),
      height: theme.spacing(16),
      margin: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    mean_paper: {
      fontSize: "20px",
      textAlign: "center",
      width: theme.spacing(110),
      height: theme.spacing(16),
      margin: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    text_form: {
      margin: theme.spacing(5),
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Gamelogo />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <div>
          <div>
            <Grid item xs align="center">
              <Paper className={classes.first_paper}>{firstword}</Paper>
            </Grid>
          </div>
          <div>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Paper className={classes.useWord_paper}>
                {useWord.length > 0 ? useWord[0] : ""}
              </Paper>
              <Paper className={classes.useWord_paper}>
                {useWord.length > 1 ? useWord[1] : ""}
              </Paper>
              <Paper className={classes.useWord_paper}>
                {useWord.length > 2 ? useWord[2] : ""}
              </Paper>
              <Paper className={classes.useWord_paper}>
                {useWord.length > 3 ? useWord[3] : ""}
              </Paper>
              <Paper className={classes.useWord_paper}>
                {useWord.length > 4 ? useWord[4] : ""}
              </Paper>
            </Grid>
          </div>
          <div>
            <Grid item xs align="center">
              <Paper className={classes.mean_paper}>{mean}</Paper>
            </Grid>
          </div>
          <div>
            <Grid item xs align="center">
              <form className={classes.text_form}>
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
