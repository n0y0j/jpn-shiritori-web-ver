import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GameForm from '../components/GameForm'


function Game_ui() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: theme.spacing(16),
      height: theme.spacing(16),
      margin: theme.spacing(3)
    },
  }));


  const classes = useStyles();


  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <div className={classes.root}>
        <div className="firstword-counter">
          <Grid item xs={6}>
            <Paper className={classes.paper}>첫단어, 카운터</Paper>
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
    </Grid >
  );
}

export default Game_ui