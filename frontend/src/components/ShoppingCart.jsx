import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import PaymentButton from "./common/paymentButton";
import OnlinePayment from "./OnlinePayment";
import CartContext from "../context/CartContext";
import UserContext from "../context/UserContext";
import { getTotalPrice } from "../reducer/cart";
import { getUser } from "../reducer/users";
const ShoppingCart = () => {
  const [cart, dispatchCart] = useContext(CartContext);
  const [users, dispatchUser] = useContext(UserContext);
  const user = getUser(users);
  const products = [...cart];
  const totalPrice = getTotalPrice(cart);
  if (products.length === 0) {
    return (
      <h2
        style={{
          padding: "15%",
          textAlign: "center",
          backgroundColor: "khaki",
        }}
      >
        There are no products in the cart!!!
      </h2>
    );
  }
  return (
    <div
      className="container"
      style={{
        padding: "5%",
        margin: "0%",
      }}
    >
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <CartItems products={products} />
          <h4 style={{ margin: "5%" }}>
            Current total of your order <b>${totalPrice}</b>
          </h4>
          <h6 style={{ margin: "5%" }}>
            Order will be send in your current{" "}
            <Link to={user ? "/profile" : "/login"}>address</Link> !
          </h6>
          <PaymentButton products={products} totalPrice={totalPrice} />
          <OnlinePayment products={products} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
