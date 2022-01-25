import { toast } from "react-toastify";
import authService from "../../services/authService";
import * as orderService from "../../services/orderService";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import * as cartAction from "../../constants/cartConstant";
const PaymentButton = ({ totalPrice, products }) => {
  const [cart, dispatchCart] = useContext(CartContext);
  const handleClick = async () => {
    var answer = window.confirm("Do you want to proceed to payment?");
    if (answer) {
      const user = authService.getCurrentUser();
      if (!user) {
        toast.error("You need to sign up first!");
        return;
      }
      if (totalPrice < 50) {
        toast.error("Your order is less than 50$. Add more to cart!");
        return;
      }
      const orderProducts = products.map((product) =>
        product.quantity === undefined
          ? { ...product, quantity: 1 }
          : { ...product }
      );

      try {
        await orderService.placeOrder({
          user: user._id,
          products: orderProducts,
          totalPrice: totalPrice,
          paymentMethod: "Cash",
          status: "Pending",
        });
        toast.success("Your order was placed successfully!");
        dispatchCart({ type: cartAction.EMPTY_CART });
        setTimeout(() => {
          window.location = "/";
        }, 3000);
      } catch (ex) {
        toast.error(ex.response.data);
      }
    }
  };
  return (
    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
      <button
        className="btn btn-warning btn-block btn-lg ml-2 pay-button"
        type="button"
        onClick={handleClick}
      >
        Pay in cash on order arrival
      </button>
    </div>
  );
};

export default PaymentButton;
