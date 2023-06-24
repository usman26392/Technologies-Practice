import { useState } from "react";


export const Greet = () => {
    const [message, setMessage] = useState("Welcome to React js!");
    function ChangeMessageHandler() {
        setMessage(()=> ("Thank you for subscribe!" ))
    }
    return (
        <div>
            <h1> {message} </h1>
            <button onClick={ChangeMessageHandler}>subscribe</button>
        </div>
    )
}



