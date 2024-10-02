import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesDetails, selectMovieDetails } from '../redux/movieDetailSlice';

const MovieDetail = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    const [review, setReview] = useState({})

    const dispatch = useDispatch();
    const moviesDetail = useSelector(selectMovieDetails)
     
    useEffect(()=>{
        const fetchdata =async()=>{
            try {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`)
                 const movie = await data.json()
                setMovie(movie)
                console.log("movie", movie)

            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()

        const fetchReviews = async()=>{
            // await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
            // .then(response => response.json())
            // .then(response=>dispatch(fetchMoviesDetails(response.results)))

            try {
                const reviews = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
                const reviewData = await reviews.json()
                setReview(reviewData)
                
            } catch (error) {
                console.log(error)
            }
            dispatch(fetchMoviesDetails(review.results))
        }
        fetchReviews()
        
    },[movieId])
  return (
    <div>
    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="" alt="" />
    <div className="card-body">
            <p>{movie.title}</p>
            <p className="card-text smallText">
              {movie.release_date}
            </p>
            <h2>Overview/Review</h2>
            <p>{movie.overview}</p>
            <h2 className=''>Reviews</h2>
            <p>{review.content}</p>
          </div>
    </div>
  )
}

export default MovieDetail
