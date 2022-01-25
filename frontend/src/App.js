import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { ToastContainer } from "react-toastify";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile";
import ProfileWrapper from "./components/ProfileWrapper";
import NotFound from "./components/common/notFound";
import ShoppingCart from "./components/ShoppingCart";
import Logout from "./components/Logout";
import authService from "./services/authService";
import UserContext from "./context/UserContext";
import SearchContext from "./context/SearchContext";
import PageContext from "./context/PageContext";
import CartContext from "./context/CartContext";
import { userReducer } from "./reducer/users";
import { searchReducer } from "./reducer/search";
import { cartReducer } from "./reducer/cart";
import { pageReducer } from "./reducer/pageData";
import * as userAction from "./constants/userConstant";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [users, dispatchUser] = useReducer(userReducer, []);
  const [searchQuery, dispatchSearch] = useReducer(searchReducer, []);
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [pageData, dispatchPage] = useReducer(pageReducer, []);
  useEffect(() => {
    let user = authService.getCurrentUser();
    if (user) dispatchUser({ type: userAction.ADD_USER, payload: user });
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={[users, dispatchUser]}>
        <PageContext.Provider value={[pageData, dispatchPage]}>
          <CartContext.Provider value={[cart, dispatchCart]}>
            <SearchContext.Provider value={[searchQuery, dispatchSearch]}>
              <ToastContainer />
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="notFound" element={<NotFound />} />{" "}
                <Route path="notFound" element={<NotFound />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/changeInfo/:id" element={<ProfileWrapper />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<Navigate to={"/notFound"} />} />
              </Routes>
              <Footer />
            </SearchContext.Provider>
          </CartContext.Provider>
        </PageContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
