import { useState } from "react";
import ContactList from "./ContactList"
import Chat from "./Chat";




// example: preserving and resetting state
function ChatMessenger() {
    const [to, setTo] = useState(contacts[0]);
    // console.log(to)


  return (
    <div>
        <h2>Chat Messenger</h2>
        <ContactList
            contactArray = {contacts}
            contactSelect = { cont => setTo(cont) }
        />
        <Chat key={to.email} contactSelect={to} />
    </div>
  )
}

export default ChatMessenger


const contacts = [
    { name: 'Farhan', email: 'farhan@mail.com' },
    { name: 'Usman', email: 'usman@mail.com' },
    { name: 'Rehan', email: 'rehan@mail.com' }
];



