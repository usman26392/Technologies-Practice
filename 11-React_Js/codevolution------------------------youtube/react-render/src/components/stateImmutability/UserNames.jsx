import { useState } from "react"


const userNames = ["Farhan", "Usman"];


const UserNames = () => {
    const [names, setNames] = useState(userNames);
    // console.log(names);
    console.log("useState re-render")

    function addUsers() {
        // wrong way:
        // names.push("rehan");
        // names.push("fahad ali");
        // setNames(names)
        
        // right way:
        setNames([...names, "Fahad Ali", "Rehan"] );
    }


    
  return (
    <>
        <div>UserNames:</div>
        {
            names.map((name, idx)=> <div key={idx} > {name} </div>)
        }
        <div>
            <button onClick={addUsers} >add user names</button>
        </div>
    </>
  )
}

export default UserNames