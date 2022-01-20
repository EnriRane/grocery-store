import { NavLink } from "react-router-dom";
import { addSearch } from "../reducers/search";
import { cartSize } from "../reducers/cart";
import "../css/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducers/users";
const Navbar = (props) => {
  const sizeOfCart = useSelector(cartSize);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const handleSearch = (value) => {
    dispatch(addSearch(value));
  };
  const className = () => {
    let name = "fa fa-shopping-cart ";
    if (sizeOfCart) name = name + "icon";
    return name;
  };
  return (
    <div className="topnav">
      <NavLink to="/">
        <i className="fa fa-fw fa-home"></i>&nbsp; Grocery Store
      </NavLink>
      <NavLink to="/cart">
        <i className={className()} value={sizeOfCart} />
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
