import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    // when state will be update/change than its component will be re-render.
    // if no change in previous state than its component will not be re-render. only in useState
    console.log("useState rendered !")

  return (
    <>
        <button onClick={()=> (setCount((c)=> c  + 1 ))  } >Counter - {count } </button>
        <button onClick={()=> (setCount(0))  } >Counter - {count } </button>
        <button onClick={()=> (setCount(5))  } >Counter - {count } </button>
    </>
  )
}

export default Counter