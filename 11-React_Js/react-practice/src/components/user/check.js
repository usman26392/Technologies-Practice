
import GUEST from "../guest/GUEST"
import USER from "./USER"
import { useState } from "react"


{/* example-3: conditional rendering */}
const Check = () => {
    const [isRe, setIsRe] = useState(true);  

    function login() {
        setIsRe(false);
    }

    function logOut() {
        setIsRe(true);
    }
    
  return (
    <div>
        {
            isRe ? <GUEST clickData={login} /> : <USER clickData={logOut}/>
        }

    </div>
  )

}

export default Check