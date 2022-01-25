import * as action from "../constants/userConstant";
const userReducer = (state, { type, payload }) => {
  switch (type) {
    case action.ADD_USER:
      const users = [];
      users.push(payload);
      return users;
    default:
      return state;
  }
};

const getUser = (users) => {
  return users[0];
};
export { getUser, userReducer };
