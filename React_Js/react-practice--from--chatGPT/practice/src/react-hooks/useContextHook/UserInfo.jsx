
import { useContext } from "react"
import { UserContainer } from "../../App" // Importing the context from App.js


export default function UserInfo() {
    // 3. Consume the user context using useContext
    // access the data/state with the help of useContext() hook 
    const { user } = useContext(UserContainer);
    console.log("user", user);

    return (
        <div>
            {/* <button onClick={toogleLogin}>{user ? "log out from child" : "log in from child"}</button> */}
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
