import SearchReducer from "./search.reducer";
import {combineReducers} from "redux";

const reducers = combineReducers({
  search: SearchReducer
});

export default reducers;