Replaced redux, react-redux and @reduxjs/toolkit packages with useContext and useReducer hooks! 
Changes made :
- Since createSlice method has immer included in handling actions, it's OK to mutate state directly. While using reducer function of useReducer, we should copy the state first ( using spread operator) then update the state.
- Replaced createSelector and useDispatch methods with useReducer and useContext as mentioned above.
- Created folders for context, action types (constants) since both were previously included in createSlice method of @reduxjs/toolkit.
