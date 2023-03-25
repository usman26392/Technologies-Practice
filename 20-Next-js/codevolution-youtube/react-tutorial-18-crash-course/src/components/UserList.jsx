
import s from "./UserList.module.css"

const UserList = () => {
    const userNames = ["Farhan", "Usman", "Fahad Ali", "Rehan" ];

  return (
    <div>
        {
            userNames.map((userName, idx) => ( 
                <h1 className={`primary-color  ${s["border-btm"]} ${ s["main-title"] }    ` }   key={idx}   > {userName} </h1>
              ))
        }
    </div>
  )
}

export default UserList