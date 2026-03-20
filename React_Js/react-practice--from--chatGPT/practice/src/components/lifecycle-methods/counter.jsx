import { useEffect, useState } from "react";


export default function CounterLifeCycle() {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);

    function increaseCount() {
        setCount((prevCount)=> prevCount + 1)
    }

    // useEffect(() => {
    //   console.log("Run on component mount and component update");
    // });

    // useEffect(() => {
    //   console.log("Run only once on component mount. ");
    // }, []);


    useEffect(() => {
      console.log("Run only on component mount and when update 'count' state ");
    }, [count]);

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>Increase</button>
        <br />
        <br />

        <p>Check: { check ? "true": "false" } </p> 
        <button onClick={()=> (setCheck(!check))}>Check</button>
    </div>
  )
}
