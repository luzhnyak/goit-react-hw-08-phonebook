import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
} = authApi;
