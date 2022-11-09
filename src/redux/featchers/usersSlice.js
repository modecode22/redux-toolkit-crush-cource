import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUsers= createAsyncThunk("users/fetchUsers" , async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log('data====================================');
  console.log(data);
  console.log('data====================================');
  return data
})


const initialState = {
  loading: false,
  data:[],
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers:{
    [getUsers.pending]: (state , action)=>{
      state.loading = true
    },
        [getUsers.fulfilled]: (state , action)=>{
      state.loading = false
      state.data = action.payload
    },
        [getUsers.pending]: (state , action)=>{
      state.loading = false
      state.error = "error"
    }
  }
});


export default usersSlice.reducer;
