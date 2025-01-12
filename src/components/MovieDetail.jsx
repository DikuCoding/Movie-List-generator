import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectMovieDetails } from "../redux/movieSlice";
import { setReviews, selectReviews } from "../redux/reviewSlice";
import ReviewForm from "./ReviewForm";

const MovieDetail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const reviewsData = useSelector(selectReviews);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`
        );
        const movie = await response.json();
        dispatch(fetchMovieDetails(movie));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieData();
  }, [movieId]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`
        );
        const reviewData = await reviews.json();
        dispatch(setReviews(reviewData.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return `${text.substring(0, limit)}...`;
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className=" md:flex-row">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="w-full md:w-1/3 object-cover"
          />
        </div>
          <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-4">{movieDetails.title}</h1>
            <p className="text-gray-600 mb-2">
              <strong>Release Date:</strong> {movieDetails.release_date}
            </p>
            <p className="text-gray-700 mb-4">{movieDetails.overview}</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">User Reviews</h2>
            <div className="space-y-4">
              {reviewsData.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 p-4 rounded-lg"
                >
                  <p className="text-sm text-gray-500">
                    <strong>Author:</strong> {review.author}
                  </p>
                  <p className="text-gray-800 mt-2">
                    {truncateText(review.content, 200)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
