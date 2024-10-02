// src/components/CardList.js
import React, { useEffect } from 'react';
import Movies from './Movies';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovies } from '../redux/movieSlice';

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(response=>dispatch(fetchMovies(response.results)))
        .then(response=> console.log(response))
        .catch(error=>{
            console.log("There were some error with fetch operation", error)
        })
    },[])

  return (
    <div className="cards-container">
      {movies.map((card, index) => (
        <Movies key={index} movie={card} />
      ))}
    </div>
  );
};

export default MovieList;
