import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (user, { payload }) => {
      user.splice(0, user.length);
      user.push(payload);
    },
  },
});
export const getUser = createSelector(
  (state) => state.groceryStore.users,
  (users) => users[0]
);
export const { addUser } = slice.actions;
export default slice.reducer;
