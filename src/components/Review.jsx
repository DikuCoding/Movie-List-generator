import React from 'react'

const Review = ({username, content}) => {
  return (
    <>
      <div className="card">
        <div className="cardImage">
          {/* <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="" alt="street image" /> */}
        </div>
        <div className="card-body">
            <p>{movie.title}</p>
            <p className="card-text smallText">
              {movie.release_date}
            </p>
          </div>
    </div>
    </>
  )
}

export default Review
