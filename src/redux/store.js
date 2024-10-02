import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieSlice'
import movieDetailsReducer from './movieDetailSlice'
const store = configureStore({
    reducer: {
        movies: movieReducer,
        movieDetail : movieDetailsReducer
    }
})

export default store