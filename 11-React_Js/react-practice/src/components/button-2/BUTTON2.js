
import { useState, useEffect } from "react"

const BUTTON2 = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1)
    }
    
    // is may DOM may kahin b mount, update, unmount hoga toh useEffect 
    // call hoga.
    useEffect(()=> {
        console.log("run useEffect function,  on first time and on every 'mount', 'update', 'unmount' ")
    });

    // or is may agar sirf count ki state may mount , update, unmount hoga
    // toh useEffect() call hoga.
    // useEffect(()=> {
    //     console.log("run useEffect function,  on first time and on every 'mount', 'update', 'unmount' ")
    // },[count]);


    
  return (
      <div>
          <hr />
          <hr />
          <h1>state with useEffect</h1>
          <h1>Count: {count}</h1>
          <button
            onClick={handleClick} 
          >button</button>
      </div>
  )
}

export default BUTTON2