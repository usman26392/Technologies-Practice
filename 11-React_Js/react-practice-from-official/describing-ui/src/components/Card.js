
import { GetimageUrl } from "./utils"


// a parent component
const Card = () => {
  return (
    <div className="card">
      <h1>A card</h1>
        {/* caller of CardAvatar()  */}
        <CardAvatar size={100} 
            person={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
            }} />
    </div>
  )
}

export default Card


// a child component
function CardAvatar({size, person}) {
    return(
        <img src={GetimageUrl(person)} 
            alt={person.name} 
            width={size} 
            height={size} />
    )
}