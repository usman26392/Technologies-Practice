// Import createSlice function from Redux Toolkit
// createSlice helps us create a slice of the state with reducers
import { createSlice } from "@reduxjs/toolkit";

// Set up the initial (starting) state for the counter
// The counter starts at 0
const initialState = {
  value: 0,
};

// Create a slice for the counter
// A slice contains the state, reducers (functions that modify the state), and actions
const counterSlice = createSlice({
  name: "counter", // Name of this slice
  initialState, // Use the initial state we defined above
  reducers: {
    // Reducer function: Increases the counter by 1
    increment: (state) => {
      state.value = state.value + 1;
      //   or use shorthand: state.value += 1;
    },

    // Reducer function: Decreases the counter by 1
    decrement: (state) => {
      state.value -= 1;
    },

    // Reducer function: Increases the counter by a specific amount
    // action.payload contains the amount to add
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export the action creators (these are used to dispatch actions)
// For example: dispatch(increment()) or dispatch(decrement())
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer function
// This is used in the store to manage the counter state
export default counterSlice.reducer;

// explanation:
// A slice in Redux Toolkit is called that because it represents a slice (or piece) of your entire application state.

// Think of it like this:

// Your app's state is like a STORE with different departments
// Each slice(i.e part(hissa) ) is a different department in that store.
// (os store may har dapartment alag alag hay aik dosray say)
// The counterSlice is the "Numbers Department" that manages the counter feature
// Why use slices?

// Organization: Instead of one huge state object, you break it into smaller, manageable pieces (slices)
// Separation of Concerns: Each slice handles its own state and related actions
// Scalability: As your app grows, you can add more slices without cluttering your code
// In your code:

// counterSlice manages the "Numbers Department" (value: 0)
// If you had a userSlice, it would be the "Customer Department" managing user data separately
// If you had a todosSlice, it would be the "Tasks Department" managing todos separately
// When you combine all these slices(departments) together in your store, they form the complete application state. Each slice is independent and focuses on one feature or part of your app.
