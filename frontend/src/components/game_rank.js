import React, { useEffect } from "react";
import Gamelogo from "../pages/game_logo";
import axios from "axios";

function GameRank() {
  useEffect(() => {
    async function getData() {
      const rank_data = await axios.get("http://127.0.0.1:8000/api/");
      console.log(rank_data.data);
    }
    getData();
  });

  return (
    <div>
      <Gamelogo />
    </div>
  );
}

export default GameRank;
