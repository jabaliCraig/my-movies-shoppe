import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchPersonnelAsync = createAsyncThunk("personnel", async () => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/personnel`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// export const addMovieAsync = createAsyncThunk("addMovie", async (movie) => {
//     const { data } = await axios.post(`/api/Personnel`, movie);
//     return data
// });

const personnelSlice = createSlice({
  name: "personnel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPersonnelAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(addMovieAsync.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // });
  },
});

export const selectPersonnel = (state) => {
  return state.personnel;
};

export default personnelSlice.reducer;
