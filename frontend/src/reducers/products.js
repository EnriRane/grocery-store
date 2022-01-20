import { createSelector, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const slice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProducts: (products, { payload }) => {
      if (products.length === 0) {
        payload.forEach((load) => products.push(load));
      }
    },
  },
});

export const getProducts = createSelector(
  (state) => state.groceryStore.products,
  (products) => products
);
export const getNewProducts = createSelector(
  (state) => state.groceryStore.products,
  (products) => _.takeRight(products, 2)
);
export const getProductImage = (productId) =>
  createSelector(
    (state) => state.groceryStore.products,
    (products) =>
      products.filter((product) => product._id === productId)[0].image
  );

export const { addProducts } = slice.actions;
export default slice.reducer;
