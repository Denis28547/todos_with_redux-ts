import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todo/todo.reducer";
import userReducer from "./user/user.reducer";

export const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});
