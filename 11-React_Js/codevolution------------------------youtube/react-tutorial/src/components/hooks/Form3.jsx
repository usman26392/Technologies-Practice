import { useState } from "react"

// example: usestate with object
const Form3 = () => {
    const [name, setName] = useState({
        firstname: "",
        lastname: ""
    });


  return (
    <div>
        <h2>Form3</h2>
        <form>
            <input 
                type="text" 
                placeholder="firstname"
                value={name.firstname}
                onChange={(e)=> (setName({...name, firstname: e.target.value })  ) }
                />
            <input 
                type="text" 
                placeholder="lastname"
                value={name.lastname}
                onChange={(e)=> (setName({...name, lastname: e.target.value })  ) }
                />
            <h2>Your first name is - {name.firstname }  </h2>
            <h2>Your last name is - {name.lastname } </h2>
            <h4>{JSON.stringify(name) } </h4>
        </form>
    </div>
  )
}

export default Form3