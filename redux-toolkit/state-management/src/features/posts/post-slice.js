import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'], // Used for auto-refreshing
  endpoints: (builder) => ({
    // 1. GET all posts
    getPosts: builder.query({
      query: () => 'posts?_limit=10',
      providesTags: ['Post'], // This list "belongs" to the 'Post' tag
    }),
    // 2. POST (Create) a new post
    addPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Post'], // This "breaks" the tag, forcing a re-fetch of the list
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
