import React from "react";
import "./styles.scss";
const MovieDetails = ({
  movie: { Title, Genre, Year, Type, Runtime, imdbRating, Poster, Plot },
}) => {
  const maxRating = 10;
  return (
    <>
      <div className="container">
        <div className="movie-details">
          <div className="movie-details__poster">
            <img src={Poster} alt={Title} />
            <div className="movie-details__rating-group">
              <p className="movie-details__rating-title">IMDB Rating:</p>
              <p className="movie-details__rating-number">
                {imdbRating}
                <span className="movie-details__rating-divider">/</span>
                <span className="movie-details__rating-max">{maxRating}</span>
              </p>
            </div>
          </div>
          <div className="movie-details__main-information">
            <h1 className="movie-details__title">{Title}</h1>
            <ul className="movie-details__info-list">
              <li className="movie-details__info-list__item">
                <span className="movie-details__info-list__title">
                  Runtime:
                </span>
                <span className="movie-details__info-list__data">
                  {Runtime}
                </span>
              </li>
              <li className="movie-details__info-list__item">
                <span className="movie-details__info-list__title">Genre: </span>
                <span className="movie-details__info-list__data">{Genre}</span>
              </li>
              <li className="movie-details__info-list__item">
                <span className="movie-details__info-list__title">Year: </span>
                <span className="movie-details__info-list__data">{Year}</span>
              </li>
              <li className="movie-details__info-list__item">
                <span className="movie-details__info-list__title">Type: </span>
                <span className="movie-details__info-list__data">{Type}</span>
              </li>
              <li className="movie-details__info-list__item">
                <p className="movie-details__info-list__description">{Plot}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
