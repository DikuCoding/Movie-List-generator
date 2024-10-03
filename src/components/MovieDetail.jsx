import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesDetails, selectMovieDetails, selectReview } from '../redux/movieDetailSlice';
import ReviewForm from './ReviewForm';

const MovieDetail = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    const [review, setReview] = useState([])

    const reviewData = useSelector(selectReview)

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
    },[movieId])

    
    useEffect(()=>{
        const fetchReviews = async()=>{
            // await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
            // .then(response => response.json())
            // .then(response=>dispatch(fetchMoviesDetails(response.results)))

            try {
                const reviews = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
                const reviewData = await reviews.json()
                // setReview(reviewData)
                dispatch(fetchMoviesDetails(reviewData.results))
                setReview(reviewData.results)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchReviews()
    },[movieId])

    
    const postReview = useCallback(async()=>{
        try{
            const value = document.getElementById("value").value
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating`,
                 {
                    method: 'POST',
                    headers: {
                      accept: 'application/json',
                      'Content-Type': 'application/json;charset=utf-8',
                      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` 
                    },
                    body: JSON.stringify({value: value})
                  }
            )
            const reviewData = await response.json()
            }
            catch(error){
                console.log(error)
            }
        
    },[])
       
      // function to truncate text to a specified limit
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  };
  return (
    <div className="movie-card">
  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="movie-poster" alt={movie.title} />
  <div className="card-body">
    <p className="movie-title">{movie.title}</p>
    <p className="release-date">
      Released on: {movie.release_date}
    </p>

    <h2 className="section-title">Reviews</h2>
    {review.map((card, index) => (
      <div className="review-card" key={index}>
        <p className="review-author"><strong>Author:</strong> {card.author}</p>
        <p className="review-content">{truncateText(card.content, 400)}</p>
      </div>
    ))}

    {/* For displaying reviews from users */}
    {
      reviewData.map((review, index)=>(
        <div className="review-card" key={index}>
        <p className="review-author"><strong>Author:</strong> {review.author_details.username}</p>
        <p className="review-content">{truncateText(review.content)}</p>
      </div>
      ))
    }

   {/* ReviewForm Component */}
   <ReviewForm/>
  </div>

  <h2 className="section-title">Ratings:</h2>
  <div className="rating-section">
    <select className="rating-select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button className="submit-btn" onClick={() => postReview()}>SUBMIT</button>
  </div>
</div>
  )
}

export default MovieDetail
