import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function GameForm() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  const classes = useStyles();
  const state = {
    word: '안녕'
  };

  return (

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
          <form>
            <TextField id="standard-basic" label="Standard" />
            <Button variant="contained" color="primary" href="#contained-buttons">
              입력
            </Button>
          </form>
        </Grid>
      </div>
    </div>
  );
}

export default GameForm