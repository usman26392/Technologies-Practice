
import { useState } from "react"
import Parent1 from "./Parent1";
import Child1 from "./Child1";


const GrandParent = () => {
    const [count, setCount] = useState(0);
    console.log("GrandParent component rendered ")

    return (
        <>
            <div>
                <button onClick={()=> (setCount((c)=> c  + 1 ))  } >Grand parent Counter - {count } </button>
            </div>
            <Parent1>
                <Child1/>
            </Parent1>
        </>
    )
}

export default GrandParent