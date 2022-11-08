import {createSlice} from "@reduxjs/toolkit"


const initialState ={
  isLogged: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handelLogin: (state) => {
      state.isLogged = true;
    },
    handelLogout: (state) => {
      state.isLogged = false;
    },
  },
});


export const { handelLogin, handelLogout } = authSlice.actions;

export default authSlice.reducer