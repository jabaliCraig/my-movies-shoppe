import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleMovieAsync = createAsyncThunk("singleMovie", async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/movies/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// export const addMovieAsync = createAsyncThunk("addMovie", async (movie) => {
//     const { data } = await axios.post(`/api/Personnel`, movie);
//     return data
// });

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleMovieAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(addMovieAsync.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // });
  },
});

export const selectSingleMovie = (state) => {
  return state.singleMovie;
};

export default singleMovieSlice.reducer;
