
// topic: - method pass as props

import { useState } from "react"

// Child component
// accepting function as a props.
// function Button(props) {
//   return (
//     <div>
//         <button onClick={props.clickEvent} >click me!</button>
//     </div>
//   )
// }

// export default Button


// with destructuring
function Button({clickEvent}) {
  // console.log("child component rendered");

  const [first, setFirst] = useState(true);


  return (
    <div>
        <button onClick={clickEvent}>click me! Parent's state update</button>
        <button onClick={()=> setFirst(!first)}>child me! only child's state update </button>
    </div>
  )
}

export default Button





