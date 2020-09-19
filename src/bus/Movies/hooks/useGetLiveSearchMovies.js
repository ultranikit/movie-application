import { useMemo, useCallback, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getMoviesLiveSearchParams } from "../actions";
import { selectLiveSearchMovies, selectLiveSearchLoading } from "../selectors";
import { selectLiveSearchParams } from "../../Searchbar/slectors";

export const useGetLiveSearchMovies = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectLiveSearchParams, shallowEqual);
  const liveSearchMovies = useSelector(selectLiveSearchMovies, shallowEqual);
  const liveSearchLoading = useSelector(selectLiveSearchLoading);

  const getParams = useCallback(() => {
    dispatch(getMoviesLiveSearchParams(params));
  }, [dispatch, params]);

  useEffect(() => {
    getParams();
  }, [getParams]);

  return useMemo(() => ({ liveSearchMovies, liveSearchLoading }), [
    liveSearchMovies,
    liveSearchLoading,
  ]);
};
