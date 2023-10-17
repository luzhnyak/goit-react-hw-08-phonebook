import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => `users/current`,
      providesTags: ['User'],
    }),
    addUser: builder.mutation({
      query: body => {
        return {
          url: 'users/signup',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['User'],
    }),
    login: builder.mutation({
      query: body => {
        return {
          url: 'users/login',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: 'users/logout',
          method: 'POST',
        };
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
} = authApi;
