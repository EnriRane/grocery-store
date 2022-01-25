import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import SearchContext from "../context/SearchContext";
import PageContext from "../context/PageContext";
import CartContext from "../context/CartContext";
import { getUser } from "../reducer/users";
import * as pageDataAction from "../constants/pageDataConstant";
import * as searchAction from "../constants/searchConstant";
import "../css/Navbar.css";
const Navbar = () => {
  const [cart, dispatchCart] = useContext(CartContext);
  const [users] = useContext(UserContext);
  const [searchQuery, dispatchSearch] = useContext(SearchContext);
  const [pageData, dispatchPage] = useContext(PageContext);

  const user = getUser(users);
  const handleSearch = (value) => {
    dispatchPage({ type: pageDataAction.CHANGE_PAGE, payload: 1 });
    dispatchSearch({ type: searchAction.ADD_SEARCH, payload: value });
  };
  const className = () => {
    let name = "fa fa-shopping-cart ";
    if (cart.length !== 0) name = name + "icon";
    return name;
  };
  return (
    <div className="topnav">
      <NavLink to="/">
        <i className="fa fa-fw fa-home"></i>&nbsp; Grocery Store
      </NavLink>
      <NavLink to="/cart">
        <i className={className()} value={cart.length} />
        My cart
      </NavLink>
      <NavLink to="/contact">
        <i className="fa fa-fw fa-envelope"></i>&nbsp;Contact
      </NavLink>
      {!user && (
        <NavLink to="/login">
          <i className="fas fa-user-tie"></i>&nbsp;Login
        </NavLink>
      )}
      {user && (
        <NavLink to="/profile">
          <i className="fas fa-user-tie"></i>&nbsp;{user.name}
        </NavLink>
      )}
      {!user && (
        <NavLink to="/register">
          <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Register
        </NavLink>
      )}
      {user && (
        <NavLink to="/logout">
          <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Logout
        </NavLink>
      )}
      <div className="search-container">
        <form>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(e) => handleSearch(e.currentTarget.value)}
          />

          <a className="search-icon" href="#mainContainer">
            <i className="fa fa-search"></i>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
