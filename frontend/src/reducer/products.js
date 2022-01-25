import _ from "lodash";
import * as action from "../constants/productConstant";
const productReducer = (products, { type, payload }) => {
  switch (type) {
    case action.ADD_PRODUCTS:
      if (products.length === 0) {
        return [...products, ...payload];
      }

    default:
      return products;
  }
};

const getNewProducts = (products) => {
  return _.takeRight(products, 2).reverse();
};

const getProductImage = (products) => (productId) => {
  return products.filter((product) => product._id === productId)[0].image;
};
export { productReducer, getNewProducts, getProductImage };
