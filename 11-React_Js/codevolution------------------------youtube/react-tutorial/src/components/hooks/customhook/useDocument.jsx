import { useEffect } from "react"


const useDocument = (count) => {
    useEffect(() => {
        document.title = count
    }, [count])
}

export default useDocument