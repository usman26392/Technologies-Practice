
import { useState } from "react"
import { MemoizedChildTwo } from "./ChildTwo";


const ParentTwo = ({children}) => {
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("Usman");


    console.log("parentTwo component rendered ")

    return (
        <>
            <div>
                <button onClick={()=> (setCount((c)=> c  + 1 ))  }>Parent Counter - {count } </button>
            </div>
            <div>
                <button onClick={()=> (setChangeName("rehan"))} >change name: {changeName} </button>
            </div>
            <MemoizedChildTwo name={changeName} />
        </>
    )
}

export default ParentTwo