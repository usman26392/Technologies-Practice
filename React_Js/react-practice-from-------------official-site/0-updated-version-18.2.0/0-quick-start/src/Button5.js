
/**
 * ------------------- updating the screen together : lifting state up -----------------------
 * -------------------- sharing data between components ------------------------------
 */
const Button5 = ({count, click}) => {
  return (
    <button onClick={click}> clicked {count} times!</button>
  )

}

export default Button5