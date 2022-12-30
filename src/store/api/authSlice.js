import { api } from ".";

export const authSlice = api.injectEndpoints({
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
      invalidatesTags: ["GenerateEndPoint", "User"],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body: JSON.stringify(body),
        // headers: (headers) => {
        //   headers.append("Content-Type", "multipart/form-data");
        // },
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
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
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
  useLogoutMutation,
  useForgotPasswordMutation,
  useForgotPasswordLinkConfirmMutation,
  useForgotPasswordLinkResetMutation,
} = authSlice;
