
import { useState } from "react"
import useCounter from "./useCounter"


const CounterOne = () => {
    const [ count, increaseCountHandler, decrementCounterHandler, resetCounter ] = useCounter();
    // console.log(useState())
    // console.log(count)  

  return (
    <>
      <button onClick={increaseCountHandler} >+</button>
      {count}
      <button onClick={decrementCounterHandler} >-</button>
      <div>
        <button onClick={resetCounter} >reset counter</button>
      </div>
    </>
  )
}

export default CounterOne