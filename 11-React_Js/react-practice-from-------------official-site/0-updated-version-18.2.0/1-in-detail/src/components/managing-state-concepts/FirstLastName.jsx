import { useState } from "react"


// example: state structure
export default function FirstLastName() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = `${firstName} ${lastName}`;


    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }



  return (
    <div>
        <h2>Show full Name</h2>
        <label htmlFor="">
            First Name: {' '}
            <input type="text"
              value={firstName}
              onChange={handleFirstName}
             />
        </label>
        <br />
        <br />
        <label htmlFor="">
            LastName: {' '}
            <input type="text"
              value={lastName}
              onChange={handleLastName}
             />
        </label>
        <p>Your ticket will be issued to: <strong>{fullName}</strong> </p>

    </div>
  )
}
