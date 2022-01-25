import { useState, useContext } from "react";
import Delete from "./common/Delete";
import CartContext from "../context/CartContext";
import * as cartAction from "../constants/cartConstant";
import { toast } from "react-toastify";

const CartItem = ({ product }) => {
  const [cart, dispatchCart] = useContext(CartContext);
  const [quantity, setQuantity] = useState(
    product.quantity ? product.quantity : 1
  );
  const handleMinus = () => {
    if (quantity === 1) {
      toast.info("You have reached minimum quantity of product!", {
        theme: "dark",
      });
      return;
    }
    setQuantity(quantity - 1);
    dispatchCart({
      type: cartAction.DECREASE_QUANTITY_OF_PRODUCT,
      payload: { product, quantity },
    });
  };
  const handlePlus = () => {
    if (quantity === product.numberInStock) {
      toast.info("You have reached maximum quantity of product!", {
        theme: "dark",
      });
      return;
    }

    setQuantity(quantity + 1);
    dispatchCart({
      type: cartAction.ADD_QUANTITY_OF_PRODUCT,
      payload: { product, quantity },
    });
  };
  const handleDelete = () => {
    dispatchCart({ type: cartAction.DELETE_FROM_CART, payload: product });
  };
  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
      <div className="mr-1">
        <img
          className="rounded"
          src={`/images/${product.image}`}
          width="70"
          alt="Item "
        />
      </div>
      <div className="d-flex flex-column align-items-center product-details">
        <span className="font-weight-bold">{product.name}</span>
        <div className="d-flex flex-row product-desc"></div>
      </div>
      <div className="d-flex flex-row align-items-center qty">
        <i
          style={{ cursor: "pointer" }}
          className="fa fa-minus text-danger"
          onClick={() => handleMinus()}
        ></i>
        <h5 className="text-grey mt-1 mr-1 ml-1">{quantity}</h5>
        <i
          className="fa fa-plus text-success"
          style={{ cursor: "pointer" }}
          onClick={() => handlePlus()}
        ></i>
      </div>
      <div>
        <h5 className="text-grey">${product.price * quantity}</h5>
      </div>
      <Delete handleDelete={() => handleDelete()} />
    </div>
  );
};

export default CartItem;
