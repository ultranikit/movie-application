import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../../bus/Movie/hooks/useGetMovieDetails";
import { setMovieDetailshFailure } from "../../bus/Movie/actions";
import MovieDetails from "../../components/MovieDetails";
import MovieDetailsHeader from "../../components/MovieDetailsHeader";
import Loader from "../../components/Loader";
import "./styles.scss";
const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getMovie, loading, movie } = useGetMovieDetails();

  useEffect(() => {
    getMovie(id);
    return () => {
      dispatch(setMovieDetailshFailure());
    };
  }, [dispatch, getMovie, id]);
  return (
    <>
      <MovieDetailsHeader />
      {loading ? (
        <div className="movie-details-loader">
          <Loader />
        </div>
      ) : (
        <MovieDetails movie={movie} />
      )}
    </>
  );
};

export default MovieDetailsPage;
