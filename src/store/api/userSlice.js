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
  }),
});
export const { useProfileQuery } = userSlice;
