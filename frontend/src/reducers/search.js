import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "searchQuery",
  initialState: [],
  reducers: {
    addSearch: (searchQuery, { payload }) => {
      searchQuery.splice(0, searchQuery.length);
      searchQuery.push(payload);
    },
  },
});

export const { addSearch } = slice.actions;
export default slice.reducer;
