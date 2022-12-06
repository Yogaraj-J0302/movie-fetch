import React from "react";
import "./game.css";
import { useState } from "react";
export default function Game() {
  return <Play />;
}
function Play() {
  const [playerOne, setplayerOne] = useState("Player 1");
  const [playerTwo, setplayerTwo] = useState("Player 2");
  const value = [null, null, null, null, null, null, null, null, null];
  const [firstValue, setfirstValue] = useState(value);
  const [isXTurn, setisXTurn] = useState(true);
  const result = (Value) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (Value[a] === Value[b] && Value[b] === Value[c]) {
        if (Value[a] === "X") {
          return playerOne;
        }
        if (Value[a] === "O") {
          return playerTwo;
        }
      }
    }
  };
  const Winner = result(firstValue);
  const handleClick = Winner? () => {} : (index) => {
        const initial = [...firstValue];
        if (initial[index] === null) {
          initial[index] = isXTurn ? "X" : "O";
        }
        setfirstValue(initial);
        setisXTurn(!isXTurn);
      };
  return (
    <div className="game-container">
      <Entry one={setplayerOne} two={setplayerTwo} />
      <div className="box">
        {firstValue.map((e, index) => (
          <GameBox val={e} 
          onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      <Result
        Win={Winner}
        resetClick={() => {
          setfirstValue(value);
          setisXTurn(true);
        }}
      />
    </div>
  );
}
function Entry({ one, two, playerOne }) {
  return (
    <div className="entry">
      <input
        className="playerOne"
        value={playerOne}
        onChange={(e) => {
          one(e.target.value);
        }}
        placeholder="Player 1"
      />
      <input
        className="playerTwo"
        onChange={(e) => {
          two(e.target.value);
        }}
        placeholder="Player 2"
      />
    </div>
  );
}
function GameBox({ val, onPlayerClick }) {
  const boxStyle={
    color:"white",
    background:val==="X" ? "rgb(26 112 16)":val==="O"?"#b70303":"White" 
  }
  return (
    <div style={boxStyle} className="game-box" onClick={() => onPlayerClick()}>
      {val}
    </div>
  );
}
function Result({ Win, resetClick,playerOne }) {
  const spanStyle = {
    color: Win===playerOne ? "Green" : "Red",
  };
  return (
    <div className="buttonContent">
      <h1>
        Winner is: <span style={spanStyle}>{Win}</span>
      </h1>
      <button className="btn" onClick={() => resetClick()} type="button">
        Reset
      </button>
    </div>
  );
}
