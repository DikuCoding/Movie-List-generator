import React from "react";
import { useNavigate } from "react-router-dom";

const Movies = ({ movie }) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`details/${movie.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
      onClick={navigateToDetails}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">{movie.title}</h2>
        <p className="text-gray-600 text-sm mt-2">
          Release Date:{" "}
          <span className="font-medium text-gray-800">{movie.release_date}</span>
        </p>
      </div>
    </div>
  );
};

export default Movies;
