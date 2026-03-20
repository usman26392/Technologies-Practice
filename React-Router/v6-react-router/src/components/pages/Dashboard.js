
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
    let navigate = useNavigate();

  return (
    <div> 
        <h2>Dashboard page</h2> 
        <button
            onClick={()=> ( navigate("/logout") )} 
        >logout</button>
    </div>
    
  )
}

export default Dashboard