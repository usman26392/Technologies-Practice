
type headingProps = {
    children: string
}


// example: props as a children
const Heading = (props: headingProps ) => {
  console.log(props)
  return (
    <div> {props.children } </div>
  )
}

export default Heading