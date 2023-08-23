import { useState } from "react"




function ChatApp() {
    const [name, setName] = useState('Usman');
    const [message, setMessage] = useState('Hello');

    console.log(name);

    function handleChat(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`you said ${message} to ${name}`);
        }, 5000);
    }





  return (
    <div>
        <h2>ChatApp</h2>
        <form onSubmit={handleChat} >
            <label htmlFor="">
                To: { ' '}
                <select
                    value={name}
                    onChange={(e)=> {setName(e.target.value)}}
                    >
                    <option value="Usman">Usman</option>
                    <option value="Rehan">Rehan</option>
                </select>
                <br />
                <textarea 
                    cols="30" 
                    rows="10" 
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e)=> {setMessage(e.target.value)}}
                    ></textarea>
                <button type="submit">send</button>
            </label>
        </form>
    </div>
  )
}

export default ChatApp