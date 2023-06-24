
import { useState } from "react"


const Message = () => {
    const [message, setMessage] = useState("Welcome to React js!");

    // console.log(message)
    // console.log(setMessage)

    function messageChangeHandler(evt, num) {
      console.log(evt, num)
        return (
            setMessage("Wow to React js!")
        )
    }


  return (
    <div>
        <h1> {message} </h1>
        <button onClick={messageChangeHandler}>Change message!</button>
        {/* or */}
        <button onClick={(e)=> (messageChangeHandler(e, 5)) }>Change message!</button>
    </div>
  )
}

export default Message