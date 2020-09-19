import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../../components/Slider";
import MoviieItem from "../../components/MovieItem";
import Loader from "../../components/Loader";
import { useGetMovies } from "../../bus/Movies/hooks/useGetMovies";
import { useGetLiveSearchMovies } from "../../bus/Movies/hooks/useGetLiveSearchMovies";
import Searchbar from "../../components/Searchbar";
import {
  setSearchParams,
  setLiveSearchParams,
  incrementPageParam,
  decrementPageParam,
  resetPageParam,
} from "../../bus/Searchbar/actions";
import { selectTotalResults } from "../../bus/Movies/selectors";
import {
  selectHeaderCollapse,
  selectSearchCollapse,
} from "../../bus/Ui/selectors";
import {
  openHeaderCollapse,
  closeHeaderCollapse,
  openSearchCollapse,
  closeSearchCollapse,
} from "../../bus/Ui/actions";
import LiveSearchItem from "../../components/LiveSearchItem";
import Button from "../../components/Button";
import Backdrop from "../../components/Backdrop";
import { GetItemsPerPage } from "../../bus/Movies/hooks/GetItemsPerPage";

import "./styles.scss";

const Homepage = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useGetMovies();
  const { liveSearchMovies } = useGetLiveSearchMovies();
  const totalResults = useSelector(selectTotalResults);
  const {
    counItemsOnPage,
    checkFirstPage,
    checkTotalResult,
  } = GetItemsPerPage();

  const headerCollapse = useSelector(selectHeaderCollapse);
  const searchCollapse = useSelector(selectSearchCollapse);
  const collapseHeaderOnBlurHandler = () => {
    if (movies.length) {
      dispatch(openHeaderCollapse());
    } else {
      dispatch(closeHeaderCollapse());
    }
  };
  const collapseHeaderOnFocusHandler = () => {
    dispatch(openSearchCollapse());
    dispatch(openHeaderCollapse());
  };
  const setIncrementPage = () => dispatch(incrementPageParam());
  const setDecrementPage = () => dispatch(decrementPageParam());

  return (
    <>
      {searchCollapse && (
        <Backdrop onClick={() => dispatch(closeSearchCollapse())} />
      )}
      <Slider collapse={headerCollapse} />
      <div className="container">
        <div className="homepage">
          <h2 className="homepage__title">Explore movies & series</h2>

          <div className="homepage__live-search">
            <Searchbar
              className="homepage__searchbar"
              placeholder="Search..."
              name="s"
              onCloseSearch={closeSearchCollapse}
              onKeyDown={setSearchParams}
              resetPageParam={resetPageParam}
              onChange={setLiveSearchParams}
              onFocus={collapseHeaderOnFocusHandler}
              onBlur={collapseHeaderOnBlurHandler}
            />
            <div
              className={`homepage__live-search-list ${
                searchCollapse ? "show" : ""
              }`}
            >
              {loading ? (
                <div className="homepage__loader">
                  <Loader />
                </div>
              ) : (
                liveSearchMovies.map((movie) => (
                  <LiveSearchItem
                    onClick={(e) => console.log(e)}
                    key={movie.imdbID}
                    movie={movie}
                  />
                ))
              )}
            </div>
          </div>

          {loading ? (
            <div className="homepage__loader">
              <Loader />
            </div>
          ) : (
            <div className="homepage__movie-container">
              {movies.map((movie) => (
                <MoviieItem key={movie.imdbID} movie={movie} />
              ))}
              {totalResults ? (
                <div className="homepage__pagination-info">
                  <p className="homepage__pagination-items">
                    Items per page: 10
                  </p>
                  <div className="homepage__pagination-group">
                    <Button
                      className="homepage__pagination-prev"
                      disabled={checkFirstPage()}
                      title={counItemsOnPage()}
                      onClick={() => setDecrementPage()}
                    />

                    <Button
                      className="homepage__pagination-next"
                      disabled={checkTotalResult()}
                      title={totalResults}
                      onClick={() => setIncrementPage()}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {!loading && !movies.length && (
            <h2 className="homepage__empty-result">Let's Search Movie</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
