import { useRef } from "react";


//  React Refs are a way to interact with the DOM (Document Object Model) directly in React components.
//  They allow you to reference and manipulate DOM elements or React components.
//  Here's a simple example of how to use React Refs to focus an input element when a button is clicked.



export default function InputField() {
    // Create a ref to store the input element
    const inputRef = useRef(null);

    // console.log(inputRef);
    // console.log(typeof inputRef);

    // function to focus the input element
    function focusInput() {
        if(inputRef.current) {
            inputRef.current.focus();
        } 
    }


    return (
        <div>
            <h2>React Refs hook example</h2>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput} >Focus Input</button>
        </div>
    )


}
