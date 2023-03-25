import { useState } from "react"


const Form = () => {
  const [formValue, setFormValue] = useState("");
  // console.log(formValue)

  function SetFormHandler(e) {
    e.preventDefault()
    return (
      alert("you wrote: " + formValue )
    )
  }

  return (
    <form onSubmit={SetFormHandler}>
      <h1>Form</h1>
      <label htmlFor="">Username:</label>
      <input type="text"
        value={formValue}
        onChange={(e)=> ( setFormValue(e.target.value))}
       />
       <p>you are writing: {formValue } </p>
       <button type="submit" >check value</button>

    </form>
  )
}

export default Form