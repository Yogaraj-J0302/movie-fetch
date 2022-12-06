import React from "react";
import TextField from '@mui/material/TextField';

export function Entry({ one, two, setplayerOne,setplayerTwo }) {
  return (
    <div className="entry">
        <TextField
        className={"inputbox"}
        label="Player 1"
        autoFocus="true"
        value={setplayerOne}
        onChange={(e) => one(e.target.value)}
        variant="outlined"
        color="success" />
        <TextField 
        label="Player 2"
        value={setplayerTwo}
        onChange={(e) => two(e.target.value)}
         variant="outlined"
         color="error" />
    </div>
  );
}
