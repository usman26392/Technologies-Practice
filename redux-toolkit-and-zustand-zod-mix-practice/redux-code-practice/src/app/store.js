
// configureStore helps us create the Redux store with a simple setup
import { configureStore } from '@reduxjs/toolkit'

// setupListeners enables RTK Query features like refetch on reconnect
import { setupListeners } from '@reduxjs/toolkit/query'

// This reducer contains all the logic for managing counter state
import counterReducer from '../features/counter/counterSlice.js'

// Import the posts API service for fetching posts data
import { postsApi } from '../features/posts/postsApi.js'


// Create and configure the Redux store
// The store is the central place where all your app's state lives
// configureStore is a helper function that sets up the store with good defaults
// It takes an object with a 'reducer' property

export const ReduxStore = configureStore({
    // Define the reducers for your store
    // Each key in this object represents a slice of your state
    reducer: {
        counter: counterReducer,
        
        // RTK Query posts API reducer
        // The reducerPath must match the one defined in the API service
        [postsApi.reducerPath]: postsApi.reducer
    },
    
    // Add middleware for RTK Query functionality
    // This enables caching, automatic refetching, and other RTK Query features
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(postsApi.middleware)
})

// Set up listeners for RTK Query features
// This enables features like refetching when focus returns or connection restores
setupListeners(ReduxStore.dispatch)



