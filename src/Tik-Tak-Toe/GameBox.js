import React from "react";

export function GameBox({ val, onPlayerClick }) {
  const boxStyle = {
    color: "white",
    background: val === "X" ? "rgb(26 112 16)" : val === "O" ? "#b70303" : "White"
  };
  return (
    <div style={boxStyle} className="game-box" onClick={() => onPlayerClick()}>
      {val}
    </div>
  );
}
