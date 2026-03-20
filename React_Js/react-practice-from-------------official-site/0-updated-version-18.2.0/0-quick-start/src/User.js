
import "./colors.css"
import s from "./User.module.css"


/**
 * ------------------------------- example: Displaying data --------------------------------
 */

// user data: it can come from a server!
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

function Profile() {
    return (
        <>
            <h1 className={`secondary-color ${s["title"]} ${s["name"]}`}>{user.name}</h1>
            <img 
                src={user.imageUrl } 
                alt={`figure of ${user.name}`}
                width={user.imageSize}
                height={user.imageSize}
                // style={
                //     {
                //         width: (user.imageSize) * 2,
                //         height: Math.random()
                        
                //     }
                // }
            />
        </>
    )   
}

export default Profile


