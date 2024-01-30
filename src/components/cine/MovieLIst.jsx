import React from "react";
import { getAllMovies } from "../../data/movie";
import MovieCart from "./MovieCart";

const MovieLIst = () => {
    const allMovies = getAllMovies()
    console.log(allMovies)
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {allMovies.map((movie) => (
          <MovieCart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieLIst;
