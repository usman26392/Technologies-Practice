import { peoples } from "../data/scienstistPeople"
import { getImageUrl } from "../utilities/utility"


// console.log(peoples)

// example: rendering list
export default function ScienstistList() {
    let listitem = peoples.map((people)=> {
        return (
            <li key={people.id}>
                <img 
                    src={getImageUrl(people)}
                    alt={people.name}
                />
                <p>{people.name}</p> 8
            </li>
        )
    });
  return (
    <div>
        <h1>ScienstistList</h1>
        <ul>
            {listitem}
            {/* <li>
                <img src="" alt="" />
                <p></p>
            </li> */}
        </ul>
    </div>
  )
}