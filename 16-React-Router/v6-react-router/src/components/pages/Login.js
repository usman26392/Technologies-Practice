
import { useLocation } from "react-router-dom"


const Login = () => {
    let location = useLocation();
    console.log(location);

  return (
    <div> please Login page
        <h2>{location.state.message}</h2>
    </div>
  )
}

export default Login