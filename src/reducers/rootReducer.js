import { combineReducers } from "redux";
import businessReducer from "./businessReducer";
import listingReducer from "./listingReducer";

export default combineReducers({
  businessReducer,
  listingReducer
});
