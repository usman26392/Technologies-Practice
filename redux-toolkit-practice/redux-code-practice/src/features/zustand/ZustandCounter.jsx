import { useCounterStore } from "./counterStore";
import "./ZustandCounter.css";

/**
 * Zustand Counter Component
 *
 * Notice how simple it is compared to Redux:
 * - No mapStateToProps or mapDispatchToProps
 * - No Redux Toolkit slices
 * - No providers needed
 * - Just import the store hook and use it!
 */



/**
 * Understanding Zustand Selectors
 * 
 * This is a selector function in Zustand, a state management library.
 * 
 * What's Happening: in useCounterStore((state) => state.count)
 * You're calling useCounterStore (a custom hook) and passing it an arrow function 
 * as an argument. That arrow function receives the entire Zustand store state 
 * and returns just the count property from it.
 *
 * Step by Step:
 * (state) =>  — Arrow function that takes one parameter: state (all your store's data)
 * state.count — Extracts and returns only the count value from the store
 * useCounterStore(...) — Zustand's hook subscribes to only that count value
 *
 * Why This Matters (Performance):
 * This is called a "selector". Instead of getting the entire store, you're saying 
 * "I only care about count". This is useful for:
 * - Performance: Component only re-renders when count changes
 * - Clarity: Shows exactly which state your component depends on
 *
 * Example:
 * If store has: { count: 5, name: "John", age: 30 }
 * Your selector grabs just 5 (the count), ignoring name and age.
 * 
 * This prevents unnecessary re-renders when unrelated values change!
 */

function ZustandCounter() {
  // Select specific state from the store
  // This component only re-renders when 'count' changes
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  //   console.log("Zustand", useCounterStore())

  //   let check = useCounterStore();
  console.log(
    "Zustand object",
    useCounterStore((state) => state.count)
  );

  return (
    <div className="zustand-counter">
      <h2>⚡ Zustand Counter</h2>
      <div className="counter-display">
        <p className="counter-label">Current Count:</p>
        <p className="counter-value">{count}</p>
      </div>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-danger">
          ➖ Decrement
        </button>
        <button onClick={reset} className="btn btn-secondary">
          🔄 Reset
        </button>
        <button onClick={increment} className="btn btn-success">
          ➕ Increment
        </button>
      </div>

      <p className="info-text">
        Zustand: No providers, no Redux boilerplate - just pure simplicity!
      </p>
    </div>
  );
}

export default ZustandCounter;
