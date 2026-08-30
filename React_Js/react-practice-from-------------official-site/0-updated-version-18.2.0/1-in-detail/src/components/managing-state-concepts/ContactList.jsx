

function ContactList({contactArray, contactSelect}) {
    
  return (
    <div>
        <div className="contact-list">
            <ul style={{display: 'flex', justifyContent:'center', listStyle: 'none'}}>       
                {
                    contactArray.map((contact, idx)=> {
                        return (
                            <li key={contact.email}>
                                <button
                                    onClick={()=> contactSelect(contact) }  
                                >
                                    {contact.name}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default ContactList      