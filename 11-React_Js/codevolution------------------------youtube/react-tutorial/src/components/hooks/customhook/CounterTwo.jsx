
import { useState } from "react"


const CounterTwo = () => {
  const [count, setCount] = useState(0);

  function increaseCountHandler() {
    setCount((prevCount)=> prevCount + 1)
  }
  
  function decrementCounterHandler() {
    setCount((prevCount)=> prevCount - 1)
  }

  function resetCounter() {
    setCount((prevCount) => prevCount = 0 )
  }

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

export default CounterTwo