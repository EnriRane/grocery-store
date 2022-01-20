import { createSelector, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (cart, { payload }) => {
      cart.push(payload);
    },
    deleteFromCart: (cart, { payload }) => {
      const index = cart.findIndex((product) => _.isEqual(product, payload));
      cart.splice(index, 1);
    },
    addQuantityOfProduct: (cart, { payload }) => {
      const index = cart.findIndex((product) =>
        _.isEqual(product, payload.product)
      );
      cart[index].quantity = payload.quantity + 1;
    },
    decreaseQuantityOfProduct: (cart, { payload }) => {
      const index = cart.findIndex((product) =>
        _.isEqual(product, payload.product)
      );
      cart[index].quantity = payload.quantity - 1;
    },
    emptyCart: (cart, { payload }) => {
      cart.splice(0, cart.length);
    },
  },
});

export const cartSize = createSelector(
  (state) => state.groceryStore.cart,
  (cart) => cart.length
);
export const getCartProducts = createSelector(
  (state) => state.groceryStore.cart,
  (cart) => cart
);

export const getTotalPrice = createSelector(
  (state) => state.groceryStore.cart,
  (cart) => getTotal(cart)
);
export const {
  addtoCart,
  deleteFromCart,
  addQuantityOfProduct,
  decreaseQuantityOfProduct,
  emptyCart,
} = slice.actions;
export default slice.reducer;

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
