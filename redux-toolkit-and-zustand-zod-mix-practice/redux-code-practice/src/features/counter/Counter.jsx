import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

// dispatch = send action to the store
// useDispatch = hook that gives access to dispatch function
// useSelector = hook that allows you to extract data(state) from the Redux store state

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  //
  function handleIncrement() {
    // dispatch an increment action
    dispatch(increment());
  }

  function handleDecrement() {
    // dispatch a decrement action
    dispatch(decrement());
  }

  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}
