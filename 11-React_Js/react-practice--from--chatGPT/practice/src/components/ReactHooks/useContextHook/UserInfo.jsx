
import { useContext } from "react"
import { UserContext } from "../../../App" // Importing the context from App.js

export default function UserInfo() {
    // 3. Consume the user context using useContext
    // access the data/state with the help of useContext() hook 
    const { user } = useContext(UserContext);
    // console.log(user);

    return (
        <div>
            {
                user ? (
                    <h2>Welcome, {user.name}</h2>
                ) : (
                    <h2>Please Log in.</h2>
                )
            }
        </div>
    )
}
