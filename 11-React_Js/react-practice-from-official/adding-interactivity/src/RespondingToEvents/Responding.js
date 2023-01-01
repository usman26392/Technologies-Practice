

const Button = () => {
    function handleClicked(e) {
        alert("you clicked me!");
        console.log(e);
    }
  return (
    <>
        <hr/>
        <button onClick={ handleClicked } >Button</button>
    </>
  )
}

export default Button