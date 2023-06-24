import { useContext } from "react"
import { CountContext } from "../../App"



const Component4 = () => {
  const newCountContext = useContext(CountContext)
  console.log(newCountContext)

  return (
    <>
      <div>Component4: {newCountContext.countSate }  </div>
      <button onClick={()=> newCountContext.countDisp("increment")} >Increment</button>
      <button onClick={()=> newCountContext.countDisp("decrement")} >Decrement</button>
      <button onClick={()=> newCountContext.countDisp("reset")} >Reset</button>
      <br /><br />
    </>
  )
}

export default Component4