import _ from "lodash";
import * as action from "../constants/cartConstant";
const cartReducer = (cart, { type, payload }) => {
  switch (type) {
    case action.ADD_TO_CART:
      return [...cart, payload];
    case action.DELETE_FROM_CART:
      return cart.filter((product) => product._id !== payload._id);
    case action.ADD_QUANTITY_OF_PRODUCT:
      const newAddedCart = [...cart];
      const index = newAddedCart.findIndex((product) =>
        _.isEqual(product, payload.product)
      );
      newAddedCart[index].quantity = payload.quantity + 1;
      return newAddedCart;
    case action.DECREASE_QUANTITY_OF_PRODUCT:
      const newDecreasedCart = [...cart];
      const idx = newDecreasedCart.findIndex((product) =>
        _.isEqual(product, payload.product)
      );
      newDecreasedCart[idx].quantity = payload.quantity - 1;
      return newDecreasedCart;
    case action.EMPTY_CART:
      return [];

    default:
      return cart;
  }
};

const getTotalPrice = (cart) => {
  return getTotal(cart);
};
export { cartReducer, getTotalPrice };

function getTotal(cart) {
  if (cart.length === 1) {
    return quantity(cart[0]) * cart[0].price;
  }
  let sum = 0;
  for (let product of cart) {
    sum = sum + quantity(product) * product.price;
  }
  return parseFloat(sum).toFixed(2);
}
function quantity(product) {
  if (product.quantity !== undefined) return product.quantity;
  return 1;
}
