
import { useState } from "react";
import Names from "../users.json"


const SearchForm = () => {
    // console.log(Names)
    const [names, setNames] = useState("");
    function namesaHandler(e) {
        setNames(e.target.value)
    }
    const filterNames = Names.filter(function(name) {
        return (
            name.firstname.includes(names) || name.lastname.includes(names)
        )
    });


  return (
    <div>
        <h1>Users Data</h1>
        <input type="text" value={names} onChange={namesaHandler}/>
        {
            filterNames.map((name, idx)=> (
                <p key={idx}> {name.firstname} {name.lastname}  </p>
            ))
        }
    </div>
  )
}

export default SearchForm