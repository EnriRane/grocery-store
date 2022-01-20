import { createSelector, createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "pageData",
  initialState: [],
  reducers: {
    changePage: (pageData, { payload }) => {
      pageData.splice(0, pageData.length);
      pageData.push(payload);
    },
  },
});

export const { changePage } = slice.actions;
export default slice.reducer;

export const getPageNumber = createSelector(
  (state) => state.groceryStore.pageData,
  (pageData) => pageData[0]
);
