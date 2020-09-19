import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../../bus/Movie/hooks/useGetMovieDetails";
import { selectMovieDetails } from "../../bus/Movie/selectors";
import { setMovieDetailshFailure } from "../../bus/Movie/actions";
import MovieDetails from "../../components/MovieDetails";
import MovieDetailsHeader from "../../components/MovieDetailsHeader";

const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getMovie } = useGetMovieDetails();
  const movie = useSelector(selectMovieDetails);

  useEffect(() => {
    getMovie(id);
    return () => {
      dispatch(setMovieDetailshFailure());
    };
  }, [dispatch, getMovie, id]);
  return (
    <>
      <MovieDetailsHeader />
      {movie && <MovieDetails movie={movie} />}
    </>
  );
};

export default MovieDetailsPage;
