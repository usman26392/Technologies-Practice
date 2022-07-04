
import { useState } from "react"

const Form = () => {
    // const [data, setData] = useState("usman");
    
    // use this state in another function
    const [check, setCheck] = useState("usman");

    
    // for multiple controlled input fields
    const [data, setData] = useState({
        userName: "",
        userEmail: "" 
    });


    // for multiple controlled input fields by single event handler
    function handleFormfields(env) {
        setData({
            ...data,
            [env.target.name]: env.target.value
        });
        // console.log([env.target.name])
    }
    
    // handling form
    function formSubmit(env) {
        env.preventDefault();
        console.log(env.target[1].value)
        console.log(env)
    }

    
  return (
    <form  onSubmit={formSubmit}>
        <h2>form controlled component handle by virtual DOM</h2>
        <div>
            {/* <input type="text" placeholder='just text' defaultValue="usman" /> */}
            {/* <input type="text" placeholder='just text' 
            value={data}
            onChange={(env)=> {
                let currval = env.target.value;
                setData(currval)
            }} 
            />
         <p>{data}</p>   */}

          {/*with multiple input fields controls  */}
          <input type="text" name="userName" value={data.userName} onChange={handleFormfields} />
          <input type="email" name="userEmail" value={data.userEmail} onChange={handleFormfields} />

          <p>{data.userName}</p>
          <p>{data.userEmail}</p>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form