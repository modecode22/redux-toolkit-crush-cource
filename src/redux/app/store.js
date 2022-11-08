import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../featchers/auth/authSlice"
import counterReducer from "../featchers/counterSlice"

export const store = configureStore({
  reducer:{
    auth: authReducer,
    counter: counterReducer,
  },
})