import React from "react";
import { useState } from "react";
import { Result } from "./Result";
import { GameBox } from "./GameBox";
import { Entry } from "./Entry";
import "./game.css";

export default function Play() {
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
          return playerOne ===""? "Player 1" :  playerOne;
        }
        if (Value[a] === "O") {
          return playerTwo ===""?"Player 2": playerTwo;
        }
      }
    }
  };
  const Winner = result(firstValue);
  const handleClick = Winner? () => { } : (index) => {
    const initial = [...firstValue];
    if (initial[index] === null) {
      initial[index] = isXTurn ? "X" : "O";
      setfirstValue(initial);
      setisXTurn(!isXTurn);
    }
  };
  return (
    <div className="game-container">
      <div className="heading">
      <h1>Tic-<span className="tac">Tac</span>-Toe</h1>
      </div>
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
        }} />
    </div>
  );
}
