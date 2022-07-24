
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count =  useSelector((state)=> (state.counter.value));
    const color =  useSelector((state)=> (state.themeColor.value));

    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={ ()=> ( dispatch(decrement())) }>-</button>
        <span style={{ color: color }}>Counter:  {count}</span>
        <button onClick={ ()=> ( dispatch(increment())) }>+</button>
        <button onClick={ ()=> ( dispatch(incrementByAmount(10))) }>payload by 10</button>

    </div>
  )
}

export default Counter