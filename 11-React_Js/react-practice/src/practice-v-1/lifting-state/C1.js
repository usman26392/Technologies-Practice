
import { useState } from "react"
import C2 from "./C2";


// is component ki state ko may nay dosray component may use kiya hay.
const C1 = () => {
    const [checkname, setCheckname ] = useState("usman");

  return (
        <C2 myName={checkname}/>
  )
}

export default C1