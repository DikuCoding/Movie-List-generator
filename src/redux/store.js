import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieSlice'
import movieDetailsReducer from './movieDetailSlice'
import reviewReducer from './reviewSlice';

const store = configureStore({
    reducer: {
        movies: movieReducer,
        movieDetail : movieDetailsReducer,
        reviews: reviewReducer
    }
})

export default store