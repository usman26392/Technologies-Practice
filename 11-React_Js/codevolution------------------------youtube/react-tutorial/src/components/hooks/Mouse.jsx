import { useEffect, useState } from "react"


// use effect run only once
const Mouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

     function logMousePosition(e) {
        console.log("mouse event")
        setX((prevX)=> ( prevX = e.clientX))
        setY((prevY)=> (prevY = e.clientY))
    }

    useEffect(()=> {
        console.log("useeffect called!")
        window.addEventListener("mousemove", logMousePosition);

        // for cleanup: for unmounting
        return ()=> {
          console.log("component unmounting code")
          window.removeEventListener("mousemove", logMousePosition )
        }
    },[] );



  return (
    <div>
        <h2>Mouse</h2>
        <p>mouse x coordinate {x} and mouse y coordinate {y} </p>
    </div>
  )
}

export default Mouse