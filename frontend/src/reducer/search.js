import * as action from "../constants/searchConstant";
const searchReducer = (searchQuery, { type, payload }) => {
  switch (type) {
    case action.ADD_SEARCH:
      return [payload];
    default:
      return searchQuery;
  }
};

export { searchReducer };
