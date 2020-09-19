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
  ...props
}) => {
  const dispatch = useDispatch();
  const selectLiveParams = useSelector(selectLiveSearchParams, shallowEqual);
  const { params, changeParams } = useSearchParams(selectLiveParams);
  const onKeyDownHandler = (event) => {
    event.persist();
    const checkClass = event.target.classList.contains("searchbar-icon");
    if (event.key === "Enter" || checkClass) {
      dispatch(resetPageParam());
      dispatch(onKeyDown(event));
      dispatch(onCloseSearch());
    }
  };

  const onChangeHandler = (event) => {
    event.persist();
    changeParams(event);
    dispatch(onChange(event));
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
        value={params.s || ""}
        name={props.name}
        title={<SearchIcon className="searchbar-icon" />}
        onClick={(event) => onKeyDownHandler(event)}
      />
    </div>
  );
};

export default Searchbar;
