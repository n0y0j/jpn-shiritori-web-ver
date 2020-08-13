import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function GameForm() {
  const [word, setWordState] = useState("");
  // const [user, setUser] = useState({
  //   name: "",
  //   count: 0,
  // });

  // const [game, setGame] = useState({
  //   firstword: "",
  //   mean: "",
  //   useWord: [],
  // });

  const handleChange = (e) => {
    setWordState({
      word: e.target.value,
    });
  };

  const handleClick = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      "http://127.0.0.1:8000/api/word/",
      word,
      headers
    );

    console.log(response);
  };

  return (
    <form>
      <TextField
        id="standard-basic"
        label="input word"
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        입력
      </Button>
    </form>
  );
}

export default GameForm;
