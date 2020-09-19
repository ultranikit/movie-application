import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const LiveSearchItem = ({ movie: { Title, Type, Poster, Year, imdbID } }) => {
  const setLink = `${Type}/${imdbID}`;
  return (
    <div className="live-search-item">
      <div className="live-search-item__wrap-image">
        <Link to={setLink} className="live-search-item__link-image">
          <img className="live-search-item__image" src={Poster} alt={Title} />
        </Link>
      </div>

      <div className="live-search-item__options">
        <div className="live-search-item__group">
          <h2 className="live-search-item__label live-search-item__option">
            <span className="live-search-item__label">Title:</span>
            <Link to={setLink} className="live-search-item__title">
              {Title}
            </Link>
          </h2>
          <div className="live-search-item__option">
            <span className="live-search-item__label">Type:</span>
            <span className="live-search-item__type">{Type}</span>
          </div>
          <div className="live-search-item__option">
            <span className="live-search-item__label">Year:</span>
            <span className="live-search-item__year">{Year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSearchItem;
