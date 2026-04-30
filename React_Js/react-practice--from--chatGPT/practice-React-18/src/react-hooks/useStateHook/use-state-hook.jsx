

// Topic: - useState()

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount((prev) => {
      return (
        prev + 1
      )
    });
  }

  return (
    <div>
      <h2>useState hook:</h2>
      <h2>{count}</h2>
      <button onClick={counter}>Increase</button>
    </div>
  )
}
