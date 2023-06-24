import { useState } from "react";


const useCounter = () => {
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

    return [count, increaseCountHandler, decrementCounterHandler, resetCounter  ] 


}

export default useCounter