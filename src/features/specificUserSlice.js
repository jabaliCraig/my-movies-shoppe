import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSpecificUserAsync = createAsyncThunk("user", async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/users/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// export const addUserAsync = createAsyncThunk("addUser", async (user) => {
//     const { data } = await axios.post(`/api/users`, user);
//     return data
// });

const specificUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSpecificUserAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
    // builder.addCase(addUserAsync.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // });
  },
});

export const selectSpecificUser = (state) => {
  return state.user;
};

export default specificUserSlice.reducer;
