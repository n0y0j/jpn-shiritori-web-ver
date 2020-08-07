import React, { Component } from 'react';
import Gamelogo from "./Gamelogo"
import Game from "./Game"

class Main extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const posts = await res.json();
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }

  // 보여지는 부분
  render() {
    return (
      <div>
        <Gamelogo />
        <Game />
        {/* {this.state.posts.map(item => (
          <div key={item.id}>
            <h1>{item.word}</h1>
          </div>
        ))} */}
      </div>
    );
  }
}

export default Main;