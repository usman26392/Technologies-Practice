import { Child } from "./Child"



export const Parent = () => {

  // below: recieving data from child component
  const parentMessage = (childData)=> {
    alert(childData)
  }

  return (
    <div>
      <Child clickMessage={parentMessage} />
    </div>
  )
}
