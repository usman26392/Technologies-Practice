import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./counter-slice";


// Topic: Redux Toolkit - global state management
export default function Counter() {
    const counterValue = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();


  return (
    <div>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <span style={{margin: "0 20px"}}>{counterValue}</span>
        <button onClick={()=> dispatch(increment())}>+</button>
        <br />
        <button onClick={()=> dispatch(reset())}>Reset to 0</button>
    </div>
  )
}
