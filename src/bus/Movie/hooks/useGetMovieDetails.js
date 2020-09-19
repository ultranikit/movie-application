import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getMovieDetails } from "../actions";

export const useGetMovieDetails = () => {
  const dispatch = useDispatch();

  const getMovie = useCallback(
    (imdbID) => {
      dispatch(getMovieDetails(imdbID));
    },
    [dispatch]
  );
  return { getMovie };
};
