import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile";
import NotFound from "./components/common/notFound";
import ShoppingCart from "./components/ShoppingCart";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "./reducers/users";
import authService from "./services/authService";
import { useEffect } from "react";
import Logout from "./components/Logout";
import ProfileWrapper from "./components/ProfileWrapper";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) dispatch(addUser(user));
  });
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
