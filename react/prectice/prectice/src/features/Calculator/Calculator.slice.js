import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isLoading: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add: (state) => {
      state.isLoading = true;
      console.log("okk")
    },
    addRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.value = action.payload.sum;
      console.log("Actions inside success: ", action);
    },
    addRequestFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const { add, addRequestFailed, addRequestSuccess } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
