import { useContext } from "react"
import { CountContext } from "../../App"

const Component1 = () => {
  const newCountContext = useContext(CountContext)
  // console.log(newCountContext)
  // or now we can destructuring
  // const { countSate, countDisp } = useContext(CountContext)

  return (
    <>
      <div>Component1: {newCountContext.countSate }  </div>
      <button onClick={()=> newCountContext.countDisp("increment")} >Increment</button>
      <button onClick={()=> newCountContext.countDisp("decrement")} >Decrement</button>
      <button onClick={()=> newCountContext.countDisp("reset")} >Reset</button>
      <br /><br />
    </>
  )
}

export default Component1