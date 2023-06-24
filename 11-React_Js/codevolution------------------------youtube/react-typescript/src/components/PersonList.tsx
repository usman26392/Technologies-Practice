
import { Name } from "./types/Person.types"

type personlistProps = {
    // names: {
    //     fname: string,
    //     lname: string
    // }[]

    // or
    names: Name[]

}


const PersonList = (props: personlistProps ) => {
  return (
    <>
        <div>PersonList</div>
        {
            props.names.map((name, idx)=> ( <h2 key={idx}> { name.fname }  { name.lname  }   </h2>  ) )
        }
    </>
  )
}

export default PersonList