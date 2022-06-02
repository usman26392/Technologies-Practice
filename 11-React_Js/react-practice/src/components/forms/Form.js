

import { useState } from "react"

function Form() {
    const [value, setValue] = useState("usman");
    let a;

  return (
    <div>
        <hr />
        <hr />
        <h1>form react</h1>
        <form action="">
            <input type="text" value='Apple' />
            <br />
            <input type="text" defaultValue='Apple' />
            <br />
            <input type="text" value={value}
                onChange={(e)=>{
                    // console.log(e.target.value.toUpperCase())
                    a = e.target.value.toUpperCase()
                    setValue(a);
                }
            } />
        </form>
    </div>
  )
}

export default Form