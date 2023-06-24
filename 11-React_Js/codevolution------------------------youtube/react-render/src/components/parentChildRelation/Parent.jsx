import { useState } from "react"
import Child from "./Child";





const Parent = () => {
    const [count, setCount] = useState(0);

    // when state will be update/change than its component will be re-render.
    // if no change in previous state than its component will not be re-render. only in useState
    console.log("parent component rendered ")

  return (
    <>
        <button onClick={()=> (setCount((c)=> c  + 1 ))  } >Counter - {count } </button>
        <button onClick={()=> (setCount(0))  } >Counter - {count } </button>
        <button onClick={()=> (setCount(5))  } >Counter - {count } </button>
        <br /><br />
        <Child/>
    </>
  )
}

export default Parent