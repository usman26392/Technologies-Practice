


import { useReducer } from "react";

// example3: counters with multiple useReducer()
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


const Counter5 = () => {
  const [newCount, dispatch] = useReducer(reducer , initialState);
  const [newCount2, dispatch2] = useReducer(reducer, initialState);

  console.log(newCount)
  console.log(newCount2)

  return (
    <>
      <div>Counter1: {newCount}</div>
      <button onClick={()=> dispatch("increment")} >Increment</button>
      <button onClick={()=> dispatch("decrement")} >Decrement</button>
      <button onClick={()=> dispatch("reset")} >Reset</button>
      <br /><br />
      <div>counter2: {newCount2}</div>
      <button onClick={()=> dispatch2("increment")} >Increment</button>
      <button onClick={()=> dispatch2("decrement")} >Decrement</button>
      <button onClick={()=> dispatch2("reset")} >Reset</button>


    </>
  )
}

export default Counter5