import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    moviesDetails: {},
    reviews: []
}

const movieDetailSlice = createSlice({
    name: 'movieDetails',
    initialState: initialState,
    reducers: {
     fetchMoviesDetails: (state, actions)=>{
        state.moviesDetails = actions.payload
     },
     addReview: (state, actions)=>{
        state.reviews=actions.payload
     }
    },
})

export const {fetchMoviesDetails, addReview} = movieDetailSlice.actions
// export const {addReview} = movieDetailSlice.actions

export const selectMovieDetails = (state)=> state.movieDetail.movieDetails

export const selectReview = (state)=> state.movieDetail.reviews

export default movieDetailSlice.reducer