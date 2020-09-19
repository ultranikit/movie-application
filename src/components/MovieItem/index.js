import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const MoviieItem = ({ movie: { Poster, Title, Type, Year, imdbID } }) => {
  return (
    <div className="movie">
      <Link to={`${Type}/${imdbID}`} className="movie__link">
        <img className="movie__image" src={Poster} alt={Title} />
        <div className="movie__items">
          <h3 className="movie__title">{Title}</h3>
          <div className="movie__options">
            <span className="movie__year">{Year}</span>
            <span className="movie__type">{Type}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviieItem;
