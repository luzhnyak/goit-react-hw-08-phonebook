import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
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

  tagTypes: ['User', 'Contacts'],
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
      // invalidatesTags: ['User'],
    }),
    login: builder.mutation({
      query: body => {
        return {
          url: 'users/login',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['User', 'Contacts'],
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: 'users/logout',
          method: 'POST',
        };
      },
      invalidatesTags: ['User', 'Contacts'],
    }),
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts', 'Users'],
    }),
    addContact: builder.mutation({
      query: body => {
        return {
          url: 'contacts',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = api;
