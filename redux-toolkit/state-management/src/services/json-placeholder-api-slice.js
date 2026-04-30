import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonPlaceHolderAPI = createApi({
  reducerPath: "jsonPlaceHolderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts?_limit=10",
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

// self generated hooks for components to use to call the endpoints
export const { useGetPostsQuery, useCreatePostMutation } = jsonPlaceHolderAPI;


