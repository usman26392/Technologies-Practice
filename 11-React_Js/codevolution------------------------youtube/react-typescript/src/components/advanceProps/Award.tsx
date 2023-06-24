
type awardProps = {
    children: React.ReactNode
}


// example: props as a react component
const Award = (props: awardProps ) => {
  return (
    <div>{props.children} </div>
  )
}

export default Award