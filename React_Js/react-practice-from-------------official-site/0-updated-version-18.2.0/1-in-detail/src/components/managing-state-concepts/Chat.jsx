import { useState } from "react"


function Chat({contactSelect}) {
    const [text, setText] = useState('')



  return (
    <div>
        <div className="chat-panel" style={{textAlign: 'center'}}>
            <textarea
                value={text}
                placeholder={'Chat to ' + contactSelect.name }
                onChange={e => setText(e.target.value)}
             ></textarea>
            <button 
                style={{display: 'block', margin: '1em auto'}}>Send to {contactSelect.email}</button>
        </div>
    </div>
  )
}

export default Chat