import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
  isLoading: "idle",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovieRequest: (state) => {
      state.isLoading = "loading";
    },
    getMovieRequestSuccess: (state, action) => {
      state.isLoading = "completed";
      state.movies = action.payload.result;
    },
    getMovieFailed: (state) => {
      state.isLoading = "error";
      state.movies = [];
    },
  },
});

export const { getMovieRequest, getMovieRequestSuccess, getMovieFailed } =
  moviesSlice.actions;
export default moviesSlice.reducer;
