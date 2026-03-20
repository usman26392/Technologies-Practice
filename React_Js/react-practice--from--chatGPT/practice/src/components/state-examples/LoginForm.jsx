import { useState } from "react"


// topic: state

function LoginForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // console.log(userName)

    function handleUserName(evtObj) {
        setUserName(evtObj.target.value)
    }

    function handlePassword(evtObj) {
        setPassword(evtObj.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Here, Perform login logic with username and password
    }


    return (
        <div>
            <h1>login form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    userName:
                    <input type="text" placeholder="Enter your name" value={userName} onChange={handleUserName} />
                </label>
                <br />
                <br />
                <label htmlFor="">
                    password:
                    <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword} />
                </label>
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm