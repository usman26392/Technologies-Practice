
// import './BUTTON.scss'

import { useState } from "react"

const BUTTON = ({textBtn}) => {
  const [mybutton, setmyButton] = useState("usman");
  return (
    <div>
        <h1>useState</h1>
        <button onClick={function() {
          {setmyButton("rehan")}
        }}>{mybutton}</button>
    </div>
  )
}

export default BUTTON