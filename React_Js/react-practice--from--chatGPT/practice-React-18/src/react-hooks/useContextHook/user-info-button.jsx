import { useContext } from "react"
import { UserContainerContext } from "../../App" 

export default function UserInfoButton() {
    // 3. Consume the user context using useContext
    // access the data/state with the help of useContext() hook 
    const { user, toogleLogin } = useContext(UserContainerContext);
    // console.log("user", user);


    return (
        <div>
            <button onClick={toogleLogin}>{user ? "log out from child" : "log in from child"}</button>
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
