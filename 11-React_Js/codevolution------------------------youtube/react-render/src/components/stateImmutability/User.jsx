import { useState } from "react"


const user = {
    firstName: "Muhammad",
    lastName: "Usman"
}

const User = () => {
    const [userData, setUserData] = useState(user)
    console.log(userData);
    console.log(user)

    function changeName() {
        // this can not be possible to change directly.
        // userData.firstName = "Muhammad";
        // userData.lastName = "Farhan";
        // setUserData(userData);

        // this is right way!
        setUserData({...userData, firstName: "Fahad", lastName: "ali"  } )
    }

  return (
    <>
        <div>User: {userData.firstName } {userData.lastName } </div>
        <button onClick={changeName} >change data</button>
    </>
  )
}

export default User