import { useReducer } from "react";


// example: counter with useReducer hook


// define initial state
const initialState = {
  count: 0,
};

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

function CounterApp() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(counterReducer, initialState);
  // console.log(state)

  // Event handlers to dispatch actions
  const handleIncrement = () => {
    dispatch({
      type: "increment",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "decrement",
    });
  };

  return (
    <div>
      <h1>Counter with use reducer hook</h1>
      <h2>Counter: {state.count}</h2>
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterApp;


/**
 *  We import useReducer from React to manage state with a reducer function.
    We define an initial state object (initialState) with a count property set to 0.
    The counterReducer function is created to handle state changes based on action types ('INCREMENT' and 'DECREMENT').
    In the CounterApp component, we initialize the state using useReducer, providing the counterReducer function and initialState.
    We define event handlers (handleIncrement and handleDecrement) that dispatch actions when the corresponding buttons are clicked.
    The current count value from the state is displayed in the component's JSX.
    This example creates a simple counter application that increments or decrements a count value when buttons are clicked.
    The state management is handled using the useReducer hook along with a reducer function (counterReducer).

 */
