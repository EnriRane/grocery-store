import { createSelector, createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "mostSold",
  initialState: [],
  reducers: {
    addMostSoldProducts: (mostSold, { payload }) => {
      mostSold.splice(0, mostSold.length);
      payload.forEach((load) => mostSold.push(load));
    },
  },
});

export const getMostSoldProducts = createSelector(
  (state) => state.groceryStore.mostSold,
  (mostSold) => mostSold
);

export const { addMostSoldProducts } = slice.actions;
export default slice.reducer;
