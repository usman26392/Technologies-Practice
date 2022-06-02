

import { useState } from "react"
import './BUTTON_4.css'

const BUTTON_4 = () => {
  const [isClass, setIsClass] = useState(false);

  function changeClass() {
    setIsClass(true)
  }


  return (
    <div>
      <hr />
      <hr />
      <button 
       className={ isClass ? "btn" : "btn2"}
       onMouseEnter={()=> {changeClass()}}>Button</button>
    </div>
  )
}

export default BUTTON_4