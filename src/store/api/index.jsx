import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.cheers.global/api",
    prepareHeaders: (headers) => {
      headers.append("Content-Type", "application/json");
    },

    // headers: { },
  }),
  tagTypes: ["GenerateEndPoint"],
  // tagTypes: ["Post"],
  endpoints: (builder) => ({
    generateOTP: builder.mutation({
      query: (body) => ({
        url: "/generate_otp",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
      transformResponse: (response) => response.data,
    }),
    verifyOTP: builder.mutation({
      query: (body) => ({
        url: "/verify_otp",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
      transformResponse: (response) => response.data,
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGenerateOTPMutation,
  useVerifyOTPMutation,
  useRegisterMutation,
} = api;
