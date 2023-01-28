import { useState } from "react"


// example1
export const MovingDot = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div 
      className="red-container"
      onPointerMove={(e)=> {
        setPosition({
          ...position,
          x: e.clientX,
          y: e.clientY
        })
      }}
    >
      <span 
        className="red-circle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></span>
    </div>
  )
}


// example2
export function EmailForm() {
  return(
    <form style={
      {
        marginTop: "130px"
      }
    }>
      <label htmlFor="">
        firstname: {"  "}
        <input type="text" />
      </label>
      <label htmlFor="">
        firstname: {"  "}
        <input type="text" />
      </label>
    </form>
  )
}