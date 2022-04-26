

import {useState} from 'react'


function useCustomCounter() {
    const [count, setCount] = useState(0);
    const handleInc = ()=> {
        setCount(count + 1)
    }
    return (
        {
            // return an object
            count,
            handleInc
        }
    )
}



export default useCustomCounter