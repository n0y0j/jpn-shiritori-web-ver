import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class GameForm extends Component {
  state = {
    word: ''
  }


  handleChange = (e) => {
    this.setState({
      word: e.target.value
    })
  }

  handleClick = () => {
    console.log(this.state.word)

    let word_data = new FormData();
    word_data.append('word', this.state.word);

    const response = axios.post('http://127.0.0.1:8000/api/word/', word_data)
    console.log(response)

  }

  render() {
    return (
      <form>
        <TextField
          id="standard-basic"
          label="input word"
          value={this.state.word}
          onChange={this.handleChange} />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          입력
    </Button>
      </form>
    )
  }
}

export default GameForm;
