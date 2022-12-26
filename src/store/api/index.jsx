import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.cheers.global/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      console.log(token);
      headers.append("Content-Type", "application/json");
      if (token) {
        headers.append("X-Access-Token", token);
      }
    },

    // headers: { },
  }),
  tagTypes: ["GenerateEndPoint"],

  endpoints: (builder) => ({
    generateOTP: builder.mutation({
      query: (body) => ({
        url: "/generate_otp",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
    }),
    verifyOTP: builder.mutation({
      query: (body) => ({
        url: "/verify_otp",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
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
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "/forgot-password-link",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
    }),
    forgotPasswordLinkConfirm: builder.mutation({
      query: (body) => ({
        url: "/forgot-password-link-confirm",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
    }),
    forgotPasswordLinkReset: builder.mutation({
      query: (body) => ({
        url: "/forgot-password-link-reset",
        method: "POST",
        body: JSON.stringify(body),
      }),

      invalidatesTags: ["GenerateEndPoint"],
    }),
  }),
});

export const {
  useGenerateOTPMutation,
  useVerifyOTPMutation,
  useRegisterMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useForgotPasswordLinkConfirmMutation,
  useForgotPasswordLinkResetMutation,
} = api;
