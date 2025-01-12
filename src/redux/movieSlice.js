import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: [],
    movieDetails: {}, // Add state for movie details
}

const movieSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
     fetchMovies: (state, actions)=>{
        state.movies = actions.payload
     },
     fetchMovieDetails: (state, action) => {
        state.movieDetails = action.payload; // Store movie details
      },
    },
  })
  // now available:
  // also available:

  export const {fetchMovies, fetchMovieDetails} = movieSlice.actions

  export const selectMovies = (state)=> state.movies.movies;
  export const selectMovieDetails = (state)=> state.movies.movieDetails;

  export default movieSlice.reducer