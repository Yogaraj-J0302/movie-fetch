import React from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function Result({ Win, resetClick, playerOne }) {
  const spanStyle = {
    color: Win === playerOne ? "Green" : "Red",
  };
  const { width, height } = useWindowSize()
  return (
    <div className="buttonContent">
      {Win?<h1>
        <Confetti
      width={width}
      height={height}
    />
        Winner is: <span style={spanStyle}>{Win}</span>
      </h1>:""}
      <button className="btn" onClick={() => resetClick()} type="button">
        Reset
      </button>
    </div>
  );
}