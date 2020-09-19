import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useSearchParams } from "../../bus/Searchbar/hooks/useSearchParams";
import { selectLiveSearchParams } from "../../bus/Searchbar/slectors";
import Button from "../Button";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.scss";

const Searchbar = ({
  type = "text",
  resetPageParam,
  onCloseSearch,
  onKeyDown,
  onChange,
  searchAction,
  ...props
}) => {
  const dispatch = useDispatch();
  const selectLiveParams = useSelector(selectLiveSearchParams, shallowEqual);
  const { params, changeParams } = useSearchParams(selectLiveParams);
  const onKeyDownHandler = (event) => {
    event.persist();
    if (event.key === "Enter") {
      dispatch(resetPageParam());
      dispatch(onKeyDown(params));
      dispatch(onCloseSearch());
      event.target.blur();
    }
  };

  const onSearchButton = () => {
    dispatch(resetPageParam());
    dispatch(onKeyDown(params));
    dispatch(onCloseSearch());
  };

  const onChangeHandler = (event) => {
    event.persist();
    const newParams = { s: event.target.value };
    changeParams(event);
    dispatch(onChange(newParams));
  };

  return (
    <div className="searchbar-container">
      <input
        type={type}
        autoComplete="off"
        value={params.s || ""}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        {...props}
      />
      <Button
        title={<SearchIcon className="searchbar-icon" />}
        onClick={() => onSearchButton()}
      />
    </div>
  );
};

export default Searchbar;
