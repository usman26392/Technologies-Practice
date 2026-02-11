

import { create } from "zustand";

/**
 * Zustand Store - Counter Example
 *
 * Zustand is a lightweight state management library
 * Key benefits:
 * - No providers needed (unlike Redux or Context API)
 * - Minimal boilerplate
 * - Hook-based API
 * - Very fast and scalable
 * - Small bundle size (~500 bytes)
 *
 * Real-life use cases:
 * - Global state management (simpler than Redux)
 * - User preferences
 * - Shopping cart
 * - Modal visibility
 * - Notifications
 */

// Create a store using the create function
export const useCounterStore = create((set) => ({
  // State
  count: 0,

  // Actions/Methods to update state
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementByAmount: (amount) =>
    set((state) => ({ count: state.count + amount })),
  reset: () => set({ count: 0 }),
}));

/**
 * How Zustand Store Works:
 *
 * 1. create() - Creates a store hook
 * 2. (set) => ({...}) - Callback that receives the 'set' function
 * 3. State properties - Define your state (count: 0)
 * 4. Actions - Methods that call set() to update state
 *
 * Zustand automatically handles:
 * - State updates
 * - Component re-renders
 * - Memoization
 * - No need for Redux middleware or Context providers
 */
