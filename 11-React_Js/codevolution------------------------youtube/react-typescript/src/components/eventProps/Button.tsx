
// example: when event handler with no returning value.
type buttonProps = {
  // click: ()=> void
  // click: (event: React.MouseEvent)=> void
  click: (event: React.MouseEvent<HTMLButtonElement>) => void
}


const Button = (props: buttonProps ) => {
  return (
    <button onClick={props.click} >Button</button>
  )
}

export default Button