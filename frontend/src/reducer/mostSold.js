import * as action from "../constants/mostSoldConstant";
const mostSoldReducer = (mostSold, { type, payload }) => {
  switch (type) {
    case action.ADD_MOST_SOLD_PRODUCTS:
      return [...payload];

    default:
      return mostSold;
  }
};

export { mostSoldReducer };
