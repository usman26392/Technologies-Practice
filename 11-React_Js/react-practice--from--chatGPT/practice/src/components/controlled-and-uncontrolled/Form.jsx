import { useState } from "react"

// topic: controlled component
// Controlled components and uncontrolled components refer to different approaches for managing and handling form elements in React.


// Controlled Components:
// A controlled component is a form element whose value is controlled by React state. In other words, the React component has full control over the form element's value, and any changes to the value are handled through React state and event handlers.

// Key characteristics of controlled components:

// Stateful: The component maintains the value of the form element in its state.
// Controlled by React: Changes to the value are handled by the React component using state and event handlers.
// Single Source of Truth: The component is the single source of truth for the value of the form element.

function Form() {
    const [inputValue, setInputValue] = useState("");
    // console.log(inputValue)

    function handleInputField(e) {
        setInputValue(e.target.value)
    }

    return (
        <form>
            <label htmlFor="">
                username:
                <input 
                    type="text" 
                    placeholder="Enter your name"
                    value={inputValue}
                    onChange={handleInputField}
                    />
            </label>
        </form>
    )
}

export default Form