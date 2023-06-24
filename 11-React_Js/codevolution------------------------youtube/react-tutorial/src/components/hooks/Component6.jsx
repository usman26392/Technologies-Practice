
import { useContext } from "react"
import { CountContext } from "../../App"

const Component6 = () => {
  const newCountContext = useContext(CountContext)
  // console.log(newCountContext)

  return (
    <>
      <div>Component6: {newCountContext.countSate }  </div>
      <button onClick={()=> newCountContext.countDisp("increment")} >Increment</button>
      <button onClick={()=> newCountContext.countDisp("decrement")} >Decrement</button>
      <button onClick={()=> newCountContext.countDisp("reset")} >Reset</button>
      <br /><br />
    </>
  )
}

export default Component6