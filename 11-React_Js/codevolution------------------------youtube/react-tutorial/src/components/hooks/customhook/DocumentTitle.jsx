import { useEffect, useState } from "react"
import useDocument from "./useDocument";



const DocumentTitle = () => {
    const [count, setCount] = useState(0);
    useDocument(count);
    
    // useEffect(() => {
    //     document.title = count
    // }, [count])

  return (
    <div>
        <button onClick={()=> (setCount(count + 1 ) ) }  >count - {count} </button>
    </div>
  )
}

export default DocumentTitle