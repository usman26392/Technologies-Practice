import { useState } from "react"


// example: updating objects in state
function PersonForm() {
    const [person, setPerson] = useState({
        name: 'Muhammad Usman',
        email: 'usman@mail.com',
        city: {
            location: 'Mehmoodabad No1, karachi'
        }
    });


    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        })
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        })
    }

    function handleLocationChange(e) {
        setPerson({
            ...person,
            city: {
                ...person.city,
                location: e.target.value
            }
        })
    }


  return (
    <div>
        <h2>PersonForm</h2>
        <form>
            <label htmlFor="">
                Name: <input 
                        type="text" 
                        value={person.name}
                        onChange={handleNameChange}
                         />
            </label>
            <br />
            <br />
            <label htmlFor="">
                Email: <input 
                         type="email"
                         value={person.email}
                         onChange={handleEmailChange}
                          />
            </label>
            <br />
            <br />
            <label htmlFor="">
                location: <input 
                            type="text"
                            value={person.city.location}
                            onChange={handleLocationChange}
                             />
            </label>
        </form>
    </div>
  )
}

export default PersonForm