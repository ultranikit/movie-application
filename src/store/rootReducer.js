import { combineReducers } from "redux";
import { moviesReducer } from "../bus/Movies/reducer";
import { movieReducer } from "../bus/Movie/reducer";
import { searchReducer } from "../bus/Searchbar/reducer";
import { uiReducer } from "../bus/Ui/reducer";

export const rootReducer = combineReducers({
  moviesReducer,
  movieReducer,
  searchReducer,
  uiReducer,
});
