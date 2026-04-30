
import { useCallback, useState } from "react"
import Button from "./Button";

export default function ParentComp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Parent component rendered!");

  // without callback hook
  // const incrementCount = ()=> {
  //   console.log('setter function called.');
  //   setCount((prevCount)=> prevCount + 1);
  // }

  // with callback hook
  const incrementCount = useCallback(() => {
    console.log('setter function called.');
    setCount((prevCount) => prevCount + 1);
  }, [text]);


  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={incrementCount}>check</button>

      <Button incrementCountHandler={incrementCount} label={"increment"} />
      <div>
        <input 
        type="text" 
        value={text} 
        onChange={(e)=> setText(e.target.value)} 
        placeholder="Type something..." />
      </div>
      
    </div>
  )
}
