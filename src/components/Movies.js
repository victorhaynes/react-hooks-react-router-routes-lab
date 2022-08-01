import React from "react";
import { movies } from "../data";


function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map( (movie) =>
      <div key={movie.title}>
        Title: {movie.title}{" "}
        Time: {movie.time}
        <ul>Genres:
          {movie.genres.map( (genre) => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
      )}
  </div>
  );
}

export default Movies;
