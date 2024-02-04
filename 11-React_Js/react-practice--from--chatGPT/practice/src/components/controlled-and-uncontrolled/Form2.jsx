import { useRef } from "react"


// topic: uncontrolled component

// Uncontrolled Components:
// An uncontrolled component is a form element whose value is not controlled by React state. Instead, the value is managed by the DOM itself. You typically use refs to interact with and retrieve values from uncontrolled components.

// Key characteristics of uncontrolled components:

// Stateless: The component does not maintain the value in React state.
// Direct DOM Interaction: The DOM directly manages the value of the form element.
// Ref Usage: Refs are commonly used to interact with and retrieve values from uncontrolled components.



function Form2() {
    const inputRef = useRef();
    // console.log(inputRef)
    // console.log(typeof inputRef)

    function handleInputField() {
        console.log(inputRef.current.value)
    }


    return (
        <div>
            <form>
                <label htmlFor="">
                    username:
                    <input
                        type="text"
                        placeholder="Enter your name"
                        ref={inputRef}
                        onChange={handleInputField}
                    />
                </label>
            </form>
        </div>
    )
}

export default Form2




// When to Use Controlled vs. Uncontrolled Components:
// Controlled Components: Use when you want React to be the single source of truth for the form element's value. Controlled components are often preferred for their predictability and ease of handling form data in React applications.

// Uncontrolled Components: Use when you need to integrate with non-React code, have performance considerations, or when you want to leverage the direct control of the DOM for specific scenarios.

// In general, controlled components are more aligned with the React way of handling state, and they are commonly used in most React applications. Uncontrolled components might be used in specific situations where direct DOM interaction is necessary or where integrating with external libraries is required.






