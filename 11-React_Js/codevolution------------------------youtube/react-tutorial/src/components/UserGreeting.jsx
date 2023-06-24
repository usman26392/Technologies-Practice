import { useState } from "react"


const UserGreeting = () => {
    const [message, setMessage] = useState("welcome to guest");
    const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (
    <div>
        {
            // conditional rendering
            isLoggedIn ? <h1>welcome to Usman </h1>  : <h1>{message}</h1> 
        }
        
    </div>
  )
}

export default UserGreeting