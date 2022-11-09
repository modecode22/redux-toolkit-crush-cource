import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../featchers/auth/authSlice"
import counterReducer from "../featchers/counterSlice"
import usersReducer from "../featchers/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    users: usersReducer,
  },
});