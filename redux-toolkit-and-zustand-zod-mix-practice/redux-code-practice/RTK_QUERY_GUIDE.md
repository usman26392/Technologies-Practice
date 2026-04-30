# RTK Query Beginner's Guide

## What is RTK Query?

RTK Query is a powerful data fetching library included in Redux Toolkit. It handles:
- **Fetching data** from APIs
- **Caching** data automatically
- **Error handling** with helpful messages
- **Loading states** (isLoading, isFetching, etc.)
- **Automatic refetching** when needed

Think of it as an **automatic assistant** that handles all the boring data fetching work for you!

---

## Step 1: Create an API Service (`postsApi.js`)

This file defines all the API endpoints your app needs:

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',           // Name of this API slice
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'  // Base URL for all requests
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({      // Query = GET request (read data)
      query: () => '/posts'            // The API endpoint
    })
  })
})

export const { useGetAllPostsQuery } = postsApi  // Export the hook
```

### Key Terms:
- **API Service**: A central place for all your API definitions
- **Endpoint**: A specific API URL you want to call
- **Query**: Used for fetching data (GET requests)
- **Hook**: An auto-generated function like `useGetAllPostsQuery()` that you use in components

---

## Step 2: Add API to Store (`store.js`)

Register the API service in your Redux store:

```javascript
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '../features/posts/postsApi.js'

export const ReduxStore = configureStore({
  reducer: {
    // Add the API reducer
    [postsApi.reducerPath]: postsApi.reducer
  },
  // Add the API middleware (handles caching, refetching, etc.)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware)
})

// Enable RTK Query features
setupListeners(ReduxStore.dispatch)
```

### What's happening:
1. `reducer`: Stores the fetched data in Redux
2. `middleware`: Handles caching and automatic refetching
3. `setupListeners`: Enables smart features (refetch when you switch tabs, reconnect, etc.)

---

## Step 3: Use in Components (`Posts.jsx`)

Use the auto-generated hook in your React component:

```javascript
import { useGetAllPostsQuery } from './postsApi'

export default function Posts() {
  // Call the hook - it returns data, loading, and error states
  const { data: posts, isLoading, error } = useGetAllPostsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  // Display the data
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
```

### What you get from the hook:
- `data`: The fetched posts array
- `isLoading`: True while fetching
- `error`: Error object if request fails
- `isFetching`: True while any request is in progress
- `isSuccess`: True when request succeeded

---

## Flow Diagram

```
Component (Posts.jsx)
      ↓
useGetAllPostsQuery() hook
      ↓
RTK Query sends request to API
      ↓
Data is cached in Redux Store
      ↓
Component receives data + loading state
      ↓
Component re-renders with data
```

---

## Simple Example Breakdown

### What happens when component loads:

1. **User opens the app** → Component mounts
2. **Hook is called** → RTK Query checks if data is cached
3. **No cache?** → Sends GET request to `https://jsonplaceholder.typicode.com/posts`
4. **Response received** → Stores data in Redux
5. **Component updates** → Shows the posts
6. **User leaves tab** → Data stays cached
7. **User returns** → Uses cached data instantly (no new request!)

---

## Common RTK Query Hooks Syntax

```javascript
// Get all posts
const { data, isLoading, error } = useGetAllPostsQuery()

// Get a single post by ID (argument passed to hook)
const { data, isLoading } = useGetPostByIdQuery(1)  // ID = 1

// Get comments for a post
const { data: comments } = useGetPostCommentsQuery(5)  // Post ID = 5

// Pass options to the hook
const { data, skip } = useGetAllPostsQuery(undefined, {
  skip: true  // Don't fetch if you don't want to
})
```

---

## Benefits of RTK Query

✅ **Automatic Caching**: Data fetched once is reused  
✅ **Loading States**: Easy to show spinners or loading text  
✅ **Error Handling**: Built-in error state  
✅ **Deduplication**: Multiple requests for same data = only 1 API call  
✅ **Background Refetching**: Keep data fresh automatically  
✅ **No Boilerplate**: No need for loading spinners or setState logic  

---

## Next Steps

1. Try changing the API endpoint to fetch different data
2. Add more queries for different endpoints
3. Learn about **Mutations** (POST, PUT, DELETE requests)
4. Explore **Tags** for automatic cache invalidation
