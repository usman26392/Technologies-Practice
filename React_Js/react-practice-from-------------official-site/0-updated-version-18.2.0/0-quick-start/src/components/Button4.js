import { useState } from "react"

/**
 * ------------------- updating the screen -----------------------
 */
const Button4 = () => {
    const [count, setCount] = useState(0);

    function incrementNumber() {
        setCount(count + 1)
    }

  return (
    <button onClick={incrementNumber} >clicked {count} times!</button>
  )
}

export default Button4