import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GameForm from "../components/game_form";
import Gamelogo from "./game_logo";

function Game_ui(props) {
  const start_word = props.location.state.first_word;
  const start_name = props.location.state.name;
  const [info, setInfoState] = useState({
    user: [{ name: start_name, count: 0 }],
    game: [{ firstword: start_word, mean: "", useWord: [] }],
  });

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

  console.log(start_name);
  console.log(start_word);
  console.log(info.user.name);
  console.log(info.game.firstword);

  return (
    <div>
      <Gamelogo />
      <Grid container direction="column" justify="center" alignItems="center">
        <div className={classes.root}>
          <div className="firstword-counter">
            <Grid item xs={6}>
              <Paper className={classes.paper}>{info.game.firstword}</Paper>
            </Grid>
          </div>
          <div className="word-prev">
            <Grid item xs={12}>
              <Paper className={classes.paper}>전에 썼던 단어</Paper>
            </Grid>
          </div>
          <div className="word-mean">
            <Grid item xs={9}>
              <Paper className={classes.paper}>단어 뜻</Paper>
            </Grid>
          </div>
          <div className="word-form">
            <Grid item xs={9}>
              <GameForm />
            </Grid>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default Game_ui;
