import { useState } from "react"


const Chat = () => {
    const [message, setMessage] = useState("Hello");
    const [to, setTo] = useState("usman")

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`you said ${message} to ${to}  ` )
        }, 1000);
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <hr />
        <label htmlFor="">
            To:
            <select 
                name="" 
                id=""
                value={to}
                onChange={(e)=> (setTo(e.target.value))}
                >
                <option value="usman">Usman</option>
                <option value="rehan">Rehan</option>
            </select>
        </label>
        <br />
        <textarea  id="" cols="30" rows="5" 
        value={message}
        onChange={(e)=> (setMessage(e.target.value))}
         ></textarea>
        <br />
        <button type="submit">Send</button>
    </form>
  )
}

export default Chat