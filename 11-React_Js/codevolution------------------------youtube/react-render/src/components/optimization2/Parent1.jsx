import { useState } from "react"


const Parent1 = ({children}) => {
    const [count, setCount] = useState(0);
    console.log("parent1 component rendered ")

    return (
        <>
            <div>
                <button onClick={()=> (setCount((c)=> c  + 1 ))  }>Parent Counter - {count } </button>
            </div>
            {children}
        </>
    )
}

export default Parent1