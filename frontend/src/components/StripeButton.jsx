import StripeCheckout from "react-stripe-checkout";
import http from "../services/httpService";
import config from "../config.json";
import * as orderService from "../services/orderService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { emptyCart } from "../reducers/cart";
const StripeButton = ({ products, totalPrice, user }) => {
  const dispatch = useDispatch();

  const handleToken = async (token) => {
    const orderedProducts = products.map((product) =>
      product.quantity === undefined
        ? { ...product, quantity: 1 }
        : { ...product }
    );
    const { data } = await http.post(config.apiUrl + "/payment", {
      orderedProducts,
      token,
      totalPrice,
    });
    if (data === "success") {
      try {
        await orderService.placeOrder({
          user: user._id,
          products: orderedProducts,
          totalPrice: totalPrice,
          paymentMethod: "Online payment",
          status: "Pending",
        });
        toast.success("Your order was placed successfully!");
        dispatch(emptyCart);
        setTimeout(() => {
          window.location = "/";
        }, 3000);
      } catch (ex) {
        toast.error(ex.response.data);
      }
    } else {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51KGklAFrNtmbaKb0FVNWGbjajYhKY68HS9ulb4pWeCtwe6jAHv4tunXd6NoA6Re1e5tPtECChXLV22eAmXf5uKbz005bHHSj65"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={totalPrice * 100}
        name="Order"
      >
        <button className="btn btn-primary">
          Pay online and wait for the order arrival
        </button>
      </StripeCheckout>
    </div>
  );
};

export default StripeButton;
