
import { GetimageUrl } from "./utils"



function DifferentProfile({size, person}) {
    return (
        <img src={GetimageUrl(person)} 
            alt={person.name}
            width={size}
            height={size}
             />
    )
}



const DifferentProfiles = () => {
  return (
    <div>
        <h1>Passing props to a component</h1>
        <DifferentProfile size={100} 
            person={{
                name: 'Katsuko Saruhashi', 
                imageId: 'YfeOqp2'
            }}/>
        <DifferentProfile size={80} 
            person={{
                name: 'Aklilu Lemma', 
                imageId: 'OKS67lh'
            }}/>
        <DifferentProfile size={50} 
            person={{
                name: 'Lin Lanying',
                imageId: '1bX5QH6'
            }}/>
        
    </div>
  )
}

export default DifferentProfiles