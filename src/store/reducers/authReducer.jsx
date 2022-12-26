import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "api",
  initialState: {
    response: null,
    isLoading: false,
    token: undefined,
    bearerToken: "",
    user: {},
  },

  reducers: {
    getToken(state, action) {
      state.token = action.payload;
    },
    getUserDetails(state, action) {
      state.bearerToken = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

const { reducer, actions } = authSlice;
export const { getToken, getUserDetails } = actions;
export default reducer;
