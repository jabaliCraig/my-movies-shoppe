import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchMoviesAsync = createAsyncThunk("movies", async () => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/movies`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addMovieAsync = createAsyncThunk("addMovie", async (movie) => {
    const { data } = await axios.post(`/api/movies`, movie);
    return data
});

export const editMovieAsync = createAsyncThunk("editMovie", async (movie) => {
    const { data } = await axios.put(`/api/movies/${movie.id}`, movie);
    return data
});

export const deleteMovieAsync = createAsyncThunk("deleteMovie", async(id) => {
	await axios.delete(`http://localhost:8080/api/movies/${id}`);
	return id
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addMovieAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(editMovieAsync.fulfilled, (state, action) => {
			const movies = state.filter((movie) => movie.id !== action.payload);
      state = [...movies, action.payload]
    });
		builder.addCase (deleteMovieAsync.fulfilled, (state, action) => {
			return state.filter((movie) => movie.id !== action.payload)
		});
  },
});

export const selectMovies = (state) => {
  return state.movies;
};

export default moviesSlice.reducer;
