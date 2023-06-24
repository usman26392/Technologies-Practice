import { useState } from "react"


const Counter2 = () => {
  // destructuring of useState()
  const [count, setCount] = useState(0);

  // console.log(useState());
  // console.log(count);

  function increaseCountHandler() {
    // setCount(count + 1) // wrong way

    // instead of above: we will pass a function as an argument to the setter function(setCount).
    // that argument function holds component's old state. that is we will pass an paremeter.
    // in other words: we will send an function as an argument to the setter function.
    // setCount((prevState )=> prevState + 1)
    setCount((prevCount)=> prevCount + 1)
  }
  
  function decrementCounterHandler() {
    setCount((prevCount)=> prevCount - 1)
  }

  function resetCounter() {
    // setCount( (prevCount)=> {
    //   return (
    //     prevCount = 0
    //   )
    // })
    // or
    setCount((prevCount) => prevCount = 0 )
  }

  return (
    <>
      <button onClick={increaseCountHandler} >+</button>
      {
        count
      }
      <button onClick={decrementCounterHandler} >-</button>
      <div>
        <button onClick={resetCounter} >reset counter</button>
      </div>
    </>
  )
}

export default Counter2