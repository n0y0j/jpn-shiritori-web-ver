import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function GameForm() {
  const [word, setWordState] = useState("");
  const [posts, setPostsState] = useState({
    posts: [],
  });
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

    const res = await fetch("http://127.0.0.1:8000/api/");
    const posts = await res.json();
    setPostsState({
      posts,
    });

    console.log(posts);

    posts.map((item) => console.log(item.word_mean));
  };

  return (
    <div>
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
    </div>
  );
}

export default GameForm;

// {this.state.posts.map((item) => (
//   <div key={item.id}>
//     <h1>{item.word_mean}</h1>
//   </div>
// ))}
// </div>
