import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUserDetails, logOut } from "../reducers/authReducer";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.cheers.global/api",

  prepareHeaders: (headers, { getState }) => {
    console.log(getState().reducer.bearerToken, "state");
    const token = getState().token;
    const bearerToken = getState().reducer.bearerToken;
    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("X-Access-Token", token);
    }
    if (bearerToken) {
      headers.append("AUTHORIZATION", `Bearer ${bearerToken}`);
    }
  },
});

const baseQuerywithAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log(`sending refresh token`);
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      api.dispatch(getUserDetails(refreshResult));
      result = await baseQuery(args, api, extraOptions);
    } else {
      await baseQuery("/logout", api, extraOptions);
      api.dispatch(logOut());
    }
  }
  console.log(result);
  return result;
};

export const api = createApi({
  // reducerPath: "api",
  baseQuery: baseQuerywithAuth,
  tagTypes: ["GenerateEndPoint"],
  endpoints: () => ({}),
});
