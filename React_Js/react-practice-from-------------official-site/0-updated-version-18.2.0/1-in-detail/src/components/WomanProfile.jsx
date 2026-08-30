
import { getImageUrl } from "../utilities/utility";


export default function WomanProfile() {
  return (
    <div>
        <ProfileCard>
            <Avatar
              size= 'auto'
              person= {
                {
                  name: 'Katsuko Saruhashi',
                  imageId: 'YfeOqp2'
                }
              }
            />
        </ProfileCard>
    </div>
  );
}

function Avatar( {person, size} ) {
  return (
    <div className="avatar">
      <img
       src={getImageUrl(person)} 
       alt={person.name }
       width={size}
       height={size} 
       />
    </div>
  );
}


function ProfileCard( {children} ) {
    return (
        <div className="profile-card">
            { children }
            {/* {console.log( children)} */}
        </div>
    )
}
