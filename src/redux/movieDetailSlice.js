import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    moviesDetails: {}
}

const movieDetailSlice = createSlice({
    name: 'movieDetails',
    initialState: initialState,
    reducers: {
     fetchMoviesDetails: (state, actions)=>{
        state.moviesDetails = actions.payload
     }
    },
})

export const {fetchMoviesDetails} = movieDetailSlice.actions

export const selectMovieDetails = (state)=> state.movieDetail.movieDetails

export default movieDetailSlice.reducer