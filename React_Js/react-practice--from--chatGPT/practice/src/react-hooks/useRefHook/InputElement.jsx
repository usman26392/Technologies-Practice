import { useRef } from "react";


export default function InputElement() {
    const inputRef = useRef(null);

    // event handler
    const handleClick = () => {
        inputRef.current.focus();
    }

    console.log('InputElement component rendered!')

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Type something!" />
            <button onClick={handleClick}>Focus the input</button>
        </div>
    )
}
