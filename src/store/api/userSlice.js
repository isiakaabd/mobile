import { api } from ".";

export const userSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({
        url: "/user-profile",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
    Addcontacts: builder.mutation({
      query: () => ({
        url: "/contact/import",
        method: "POST",
      }),
      transformResponse: (response) => response.data,
    }),
    Getcontacts: builder.query({
      query: ({ page, per_page }) => ({
        url: `/contact/my-contacts?page=${page ? page : 1}&per_page=${
          per_page ? per_page : 5
        }`,
        method: "GET",
      }),
      invalidatesTags: ["GenerateEndPoint"],
      transformResponse: (response) => response.data,
    }),

    importContact: builder.mutation({
      query: (body) => ({
        url: "/contact/import",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["GenerateEndPoint"],
      // transformResponse: (response) => response.data,
    }),
    searchContact: builder.query({
      query: (search) => ({
        url: `/contact/search?search=${search}`,
        method: "GET",
      }),
      invalidatesTags: ["GenerateEndPoint"],

      transformResponse: (response) => response.data,
    }),
    walletDetails: builder.query({
      query: () => ({
        url: `/profile/wallets/detail`,
        method: "GET",
      }),
      invalidatesTags: ["GenerateEndPoint"],

      // transformResponse: (response) => response.data,
    }),
  }),
});
export const {
  useProfileQuery,
  useLazyGetcontactsQuery,
  useAddcontactsMutation,
  useImportContactMutation,
  useLazySearchContactQuery,
  useWalletDetailsQuery,
} = userSlice;
