
import { AdminPanel } from "./AdminPanel"
import { LoginForm } from "./LoginForm"


/**
 * --------------------------- example: conditional rendering ----------------------
 */
export const Dashboard = () => {
  let isloggedIn = true;
  return (
    <>
        {
            isloggedIn ? <AdminPanel/> : <LoginForm/>
        }
    </>
  )
}
