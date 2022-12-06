import "./App.css";
import React from "react";
import { Switch, Route,Redirect, useHistory} from "react-router-dom";
import Play from "./Tik-Tak-Toe/Play";
import { Welcome } from "./MovieList/Welcome";
import Button from "@mui/material/Button";
import { useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AddMovie from "./MovieList/AddMovie";
import { MovieDetails } from "./MovieList/MovieDetails";
import {EditMovie} from './MovieList/EditMovie';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function App() {
  const history = useHistory();
  const [Bg,setBg]=useState("light");
  const theme=createTheme({
    palette:{
      mode:Bg
    }
})
  return (
      <>
      <ThemeProvider theme={theme}>
        <Paper  style={{minHeight:"100vh"}} elevation={4}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={()=> history.push("/")}>
              Home
            </Button>
            {/* <Button color="inherit" onClick={() => history.push("/movieslist")}>
              Movie List
            </Button> */}
            <Button color="inherit" onClick={() => history.push("/addfilms")}>
              Add Movie
            </Button>
            <Button color="inherit" onClick={() => history.push("/tic-tac-toe")}>
              Play Game
            </Button>
            <Button color="inherit" onClick={() => history.push("/Contactus")}>
              contact us
            </Button>
            <Button color="inherit" style={{marginLeft:"auto"}} onClick={() =>setBg(Bg==="light"?"dark":"light")}>
            {Bg==="light"?<Brightness4Icon/>:<WbSunnyIcon/>}
            </Button>
          </Toolbar>
        </AppBar>
        <div className="route-container">
          <Switch>
            <Route exact path="/">
            <Welcome />
            </Route>
            <Route exact path="/movieslist">
              {/* <Welcome Movieadd={Movieadd} setMovieadd={setMovieadd}/> */}
              <Welcome />
            </Route>
            <Route exact path="/addfilms">
              <Redirect to="/addmovies" />
            </Route>
            <Route exact path="/addmovies">
              <AddMovie/>
            </Route>
            <Route exact path="/Contactus">
              <h1>Hey Contact</h1>
            </Route>
            <Route exact path="/tic-tac-toe">
              <Play />
            </Route>
            <Route exact path="/movieslist/details/:id">
              <MovieDetails/>
            </Route>
            <Route exact path="/movieslist/edit/:id">
              <EditMovie/>
            </Route>
            <Route path="**">
              <h1>404 Page not Found</h1>
            </Route>
          </Switch>
        </div>
      </Paper>
      </ThemeProvider>
      </>
  );
}