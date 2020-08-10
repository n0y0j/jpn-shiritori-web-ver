import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Gamelogo from '../pages/Gamelogo'


function Gamelogin() {
  const [name, setName] = useState('');
  const history = useHistory()
  const handleChange = (e) => {
    setName({
      name: e.target.value
    })
  }
  const handleClick = () => {
    let name_data = new FormData();
    console.log(name)
    name_data.append('name', name);
    console.log(name_data)

    const response = axios.post('http://127.0.0.1:8000/api/home/', name_data)

    history.push('/game')
  }

  return (
    <div>
      <Gamelogo />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h1>Welcome to the shiritori game</h1>
        <p>Please enter your nickname</p>
        <form>
          <TextField id="standard-basic" label="enter your nickname.." onChange={handleChange} />
          <Button variant="contained" color="primary" onClick={handleClick}>
            입력
            </Button>
        </form>
      </Grid >
    </div >
  );
}


export default Gamelogin