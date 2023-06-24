


import { useReducer } from "react";

// example1: counter with useReducer
const initialState = 0;

const reducer = (state, action)=> {
        console.log(state)
        console.log(action)
        switch (action) {
          case "increment":
            return state + 1;
          case "decrement":
            return state - 1;
          case "reset":
            return initialState;
          default:
            return state
        }
}


const Counter3 = () => {
  const [newCount, dispatch] = useReducer(reducer , initialState);
  console.log(newCount)
  return (
    <>
      <div>Counter: {newCount}</div>
      <button onClick={()=> dispatch("increment")} >Increment</button>
      <button onClick={()=> dispatch("decrement")} >Decrement</button>
      <button onClick={()=> dispatch("reset")} >Reset</button>
    </>
  )
}

export default Counter3