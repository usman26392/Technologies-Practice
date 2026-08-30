

import { useState } from "react";

export default function PasswordToggle() {
    const [show, setShow] = useState(false);

    function togglePassword() {
        setShow((prev) => (!prev))
    }

    

    return (
        <div>
            <h2>PasswordToggle</h2>
            <input type={show ? 'text' : 'password'} />
            <button onClick={togglePassword}> {show ? "Hide" : "Show"}</button>
        </div>
    )
}
