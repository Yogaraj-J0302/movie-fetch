
import {useHistory,useParams} from "react-router-dom"
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import {API} from './global'

export function MovieDetails() {
  const {id}=useParams();
  const [movie,setMovie]=useState({});
  useEffect(()=>{
    fetch(`${API}/movies/${id}`,
    {method:"GET"}
    ).then((data)=>data.json()).then((mv)=>setMovie(mv))
    .catch((error)=>console.log(error))
  },[]);
  const history=useHistory();
  return (
    <div>
      <iframe
        Width="800"
        height="500"
        src={movie.Trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
      <h2>{movie.movieName}</h2>
      <p>{movie.des}</p>
      <Button
        onClick={() => history.goBack()}
        variant="contained"
      >
        Back
      </Button>
    </div>
  );
}
