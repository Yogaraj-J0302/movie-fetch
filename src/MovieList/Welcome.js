import { Movie } from "./MovieList";
import {API} from './global';
import {useState,useEffect } from "react";
import './movie.css';
export function Welcome() {
  const [Movieadd,setMovieadd]=useState([]);
const getMovies=()=>{
    fetch(`${API}/movies`,
    {method:"GET"}
    ).then((data)=>data.json()).then((movie)=>setMovieadd(movie)
    );
  };
  useEffect(()=>getMovies(),[]);
  return (
    <div className="main">
      <h1 className="text-center text-primary display-2">
        <b>Movie Fetching from APIs</b>
      </h1>
      <div className="row movie-container">
        {Movieadd.map((e,key) => {
          return (
            <Movie
              name={e.movieName}
              url={e.url}
              des={e.des}
              rating={e.rating}
              alt={e.alt}
              id={e.id}
              index={key}
              Movieadd={Movieadd}
              setMovieadd={setMovieadd} />
          );
        })}
      </div>
    </div>
  );
}