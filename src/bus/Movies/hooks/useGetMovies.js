import { useMemo, useCallback, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getMoviesParams } from "../actions";
import { selectMovies, selectLoading } from "../selectors";
import { selectSearchParams } from "../../Searchbar/slectors";

export const useGetMovies = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectSearchParams, shallowEqual);
  const movies = useSelector(selectMovies, shallowEqual);
  const loading = useSelector(selectLoading);

  const getParams = useCallback(() => {
    dispatch(getMoviesParams(params));
  }, [dispatch, params]);

  useEffect(() => {
    getParams();
  }, [getParams]);

  return useMemo(() => ({ movies, loading }), [movies, loading]);
};
