import React from "react";
import shiritori from "../assets/images/shiritori.png";

function GameLogo() {
  return (
    <div className="header">
      <img src={shiritori} />
    </div>
  );
}

export default GameLogo;