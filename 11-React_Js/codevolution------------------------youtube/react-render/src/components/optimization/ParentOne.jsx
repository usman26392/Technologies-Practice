import { useState } from "react"


const ParentOne = ({children}) => {
    const [count, setCount] = useState(0);
    console.log("parentOne component rendered ")

    return (
        <>
            <button onClick={()=> (setCount((c)=> c  + 1 ))  } >Counter - {count } </button>
            {children}
        </>
    )
}

export default ParentOne