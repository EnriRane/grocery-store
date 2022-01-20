import { useState } from "react";
import StripeButton from "./StripeButton";
import authService from "../services/authService";
import { toast } from "react-toastify";
const OnlinePayment = ({ products, totalPrice }) => {
  const [enabled, setEnabled] = useState(false);

  const user = authService.getCurrentUser();
  const handleClick = () => {
    if (!user) {
      toast.error("You need to sign up first!");
      return;
    }
    if (totalPrice < 3) {
      toast.error("Your order is less than 50$. Add more to cart!");
      return;
    }
    setEnabled(true);
  };
  return (
    <div
      className="btn btn-warning btn-block btn-lg ml-2 pay-button"
      type="button"
      style={{
        margin: "8%",
        textAlign: "center",
        backgroundColor: "yellow",
        boxSizing: "border-box",
      }}
    >
      <h2>Online Payment </h2>
      {!enabled && (
        <button className="btn btn-info " onClick={handleClick}>
          Proceed and place the order
        </button>
      )}
      {enabled && (
        <StripeButton products={products} totalPrice={totalPrice} user={user} />
      )}
    </div>
  );
};

export default OnlinePayment;
