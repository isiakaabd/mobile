import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
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
    logOut(state, action) {
      state.user = null;
      state.bearerToken = null;
    },
  },
});

const { reducer, actions } = authSlice;
export const { getToken, getUserDetails, logOut } = actions;
export default reducer;
