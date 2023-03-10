import { combineReducers } from "redux";
import { usersReducer } from "./reducers";

export default combineReducers({
  users: usersReducer,
});
