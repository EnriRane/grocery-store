import * as action from "../constants/pageDataConstant";
const pageReducer = (pageData, { type, payload }) => {
  switch (type) {
    case action.CHANGE_PAGE:
      return [payload];
    default:
      return pageData;
  }
};

const getPageNumber = (pageData) => {
  return pageData[0];
};

export { pageReducer, getPageNumber };
