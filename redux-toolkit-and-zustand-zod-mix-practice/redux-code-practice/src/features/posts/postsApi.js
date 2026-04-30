// Import createApi and fetchBaseQuery from Redux Toolkit's RTK Query
// createApi: Creates an API service for data fetching
// fetchBaseQuery: A simple fetch wrapper for making HTTP requests
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Create an API service for posts
// This defines all the API endpoints we'll use for fetching posts data
export const postsApi = createApi({
  // Unique name for this API slice (like a name for this "department")
  reducerPath: 'postsApi',
  
  // Set up the base URL for all requests
  // All requests will use this URL as the starting point
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  
  // Define the endpoints (the specific API calls we can make)
  endpoints: (builder) => ({
    // Query to get all posts
    // A query is used for fetching data (GET request)
    getAllPosts: builder.query({
      // The actual URL path for this endpoint
      // Final URL will be: https://jsonplaceholder.typicode.com/posts
      query: () => '/posts'
    }),
    
    // Query to get a single post by its ID
    // This endpoint accepts an argument (postId)
    getPostById: builder.query({
      // The query function receives the argument passed to the hook
      // Final URL will be: https://jsonplaceholder.typicode.com/posts/1 (example)
      query: (postId) => `/posts/${postId}`
    }),
    
    // Query to get all comments for a specific post
    getPostComments: builder.query({
      query: (postId) => `/posts/${postId}/comments`
    }),
  })
})

// Export "auto-generated hooks" for each endpoint
// These hooks handle loading, error, and data states automatically
// useGetAllPostsQuery, useGetPostByIdQuery, useGetPostCommentsQuery
export const { 
  useGetAllPostsQuery, 
  useGetPostByIdQuery, 
  useGetPostCommentsQuery 
} = postsApi
