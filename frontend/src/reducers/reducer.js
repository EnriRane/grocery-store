import { combineReducers } from "redux";
import reducer from "./store/combineProductReducer";
export default combineReducers({
  groceryStore: reducer,
});
