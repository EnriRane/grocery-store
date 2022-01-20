import CartItems from "./CartItems";
import PaymentButton from "./common/paymentButton";
import { useSelector } from "react-redux";
import { getCartProducts, getTotalPrice } from "../reducers/cart";
import OnlinePayment from "./OnlinePayment";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const products = useSelector(getCartProducts);
  const totalPrice = useSelector(getTotalPrice);
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
            <Link to="/profile">address</Link> !
          </h6>
          <PaymentButton products={products} totalPrice={totalPrice} />
          <OnlinePayment products={products} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
