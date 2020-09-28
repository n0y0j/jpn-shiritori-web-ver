import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import GameLogo from "../components/game_logo";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

function GameForm(props) {
  const start_word = props.location.state.first_word;
  const name = props.location.state.name;
  const history = useHistory();

  const [userName, setUserName] = useState(name);
  const [word, setWordState] = useState("");
  const [count, setCount] = useState(0);
  const [useWord, setUseWord] = useState([]);
  const [redundancyCheck, setRedundancyCheck] = useState(new Map());
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
    if (word.word) {
      var check = word.word.charAt(0);
    }

    var play = false;

    if (firstword === check) {
      if (redundancyCheck.get(word.word) !== false) {
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
          setWordState({ word: "" });
          setRedundancyCheck(redundancyCheck.set(word.word, false));
        }
      } else {
        play = true;
        alert("This word has already been used");
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
      console.log(response_rank);
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
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <GameLogo />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        style={{ marginTop: "20px" }}
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
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  label="input word"
                  onChange={handleChange}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginLeft: "20px" }}
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