import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../actions";
import { selectMovieLoading, selectMovieDetails } from "../selectors";

export const useGetMovieDetails = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectMovieLoading);
  const movie = useSelector(selectMovieDetails);

  const getMovie = useCallback(
    (imdbID) => {
      dispatch(getMovieDetails(imdbID));
    },
    [dispatch]
  );
  return { getMovie, loading, movie };
};
