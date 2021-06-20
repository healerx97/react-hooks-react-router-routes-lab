import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = movies.map(movie=>{
    return(<div>
      <h2>{movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <h4>Genres: {movie.genres}</h4>
    </div>)
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  )
}

export default Movies;
