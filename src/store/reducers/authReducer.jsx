import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "api",
  initialState: {
    response: null,
    isLoading: false,
  },

  reducers: {
    setGenerateOTPResponse(state, action) {
      state.response = action.payload;
    },
  },
});

const { reducer, actions } = dataSlice;
export const { setGenerateOTPResponse } = actions;
export default reducer;
