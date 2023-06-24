import { useEffect, useRef } from "react"


// example: useRef() hook.
const InputComponent = () => {
    const inputRef = useRef(null);
    console.log(inputRef);

    useEffect(()=> {
        inputRef.current.focus()
    },[inputRef] )
    
    
    return (
        <div>InputComponent focus 
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default InputComponent