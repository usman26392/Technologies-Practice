import { useCallback, useState } from "react"
import Button from "./Button";

export default function ParentComp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Parent component rendered!");

  // without callback hook
  // const incrementCount = ()=> {
  //   setCount((prevCount)=> prevCount + 1);
  //   console.log('setter function called.');
  // }

  // with callback hook
  // Memoizing the increment function to avoid recreation on every render
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);


  return (
    <div>
      <h1>useCallback hook example: {count} </h1>
      <Button click={incrementCount} label={"increment"} />
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
