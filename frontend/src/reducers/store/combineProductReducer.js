import { combineReducers } from "redux";
import productReducer from "../products";
import userReducer from "../users";
import searchReducer from "../search";
import cartReducer from "../cart";
import mostSoldReducer from "../mostSold";
import pageReducer from "../pageData";
export default combineReducers({
  products: productReducer,
  users: userReducer,
  searchQuery: searchReducer,
  cart: cartReducer,
  mostSold: mostSoldReducer,
  pageData: pageReducer,
});
