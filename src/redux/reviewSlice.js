import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
}

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReviews: (state, action) => {
            state.reviews = action.payload;
        }
    },
})

export const {setReviews} = reviewSlice.actions;

export const selectReviews = (state) => state.reviews.reviews;

export default reviewSlice.reducer;