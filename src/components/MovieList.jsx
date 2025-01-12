import React, { useEffect } from "react";
import Movies from "./Movies";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies } from "../redux/movieSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => dispatch(fetchMovies(response.results)))
      .catch((error) => {
        console.log("There were some errors with the fetch operation", error);
      });
  }, [dispatch]);

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        Now Playing
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((card, index) => (
          <Movies key={index} movie={card} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
