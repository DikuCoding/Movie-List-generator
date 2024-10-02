import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesDetails, selectMovieDetails } from '../redux/movieDetailSlice';

const MovieDetail = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    const [review, setReview] = useState([])

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
       
    
  return (
    <div>
    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="" alt="" />
    <div className="card-body">
            <p>{movie.title}</p>
            <p className="card-text smallText">
              {movie.release_date}
            </p>
            <h2 className=''>Reviews</h2>
            {review.map((card, index)=>(
                <div>
                    <p>{card.author}</p>
                    <p>{card.content}</p>
                </div>
            ))}

            <h2>Add a comment:</h2>
                <label htmlFor="">Username :</label>
                <input type="text" />
                <textarea name="" placeholder='Enter your comments' id="">
                </textarea>
                <button>SUBMIT</button>
          </div>
          <h2>Ratings:</h2>
          {/* form to give rating */}
            <select name="" id="value">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={()=>postReview()}>SUBMIT</button>
          
    </div>
  )
}

export default MovieDetail
