
// topic: lifting state up
function Button({countValue, handleProduct}) {
  return (
    <div>
        <p>Product Count: {countValue} </p>
        <button onClick={handleProduct}>add to cart</button>
    </div>
  )
}

export default Button       