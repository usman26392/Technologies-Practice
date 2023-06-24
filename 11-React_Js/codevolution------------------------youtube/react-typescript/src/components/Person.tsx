
import { PersonProps } from "./types/Person.types"


const Person = (props: PersonProps ) => {
  console.log(props.name)
  return (
    <div>Person: {props.name.fname } { props.name.lname }   </div>
  )
}

export default Person