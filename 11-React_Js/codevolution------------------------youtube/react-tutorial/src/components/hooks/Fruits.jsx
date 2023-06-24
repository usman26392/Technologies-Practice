import { useState } from "react"


let fruits = ["Mango", "Apple", "Banana"];
// example: usestate with array.
const Fruits = () => {
    const [fruitsName, setFruitsName] = useState(fruits);
    // console.log(fruitsName)
    function addFruit() {
        setFruitsName([...fruitsName, "Orange" ] )
    }

  return (
    <div>
        <h2>Fruits</h2>
        <ul>
            {
                fruitsName.map((fruitName, idx)=> ( <li key={idx} >{fruitName} </li> ) )
            }
        </ul>
        <button onClick={addFruit} >add fruit</button>
    </div>
  )
}

export default Fruits