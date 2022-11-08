import { createSlice } from '@reduxjs/toolkit';


const initialState = {}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   handleIncrement : (val) => {
    setCounter(counter + val);
  },
   handleDecrement : (val) => {
    setCounter(counter - val);
  },
  },
});

export const { handleIncrement, handleDecrement } = counterSlice.actions;

export default counterSlice.reducer;